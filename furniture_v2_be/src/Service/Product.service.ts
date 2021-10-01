import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { ProductFactory } from '../Factory/Creator/ProductFactory';
import CategoryDetailFactory from '../Factory/Creator/CategoryDetailFactory'
import lodash from 'lodash';
import e from 'express';

class ProductService {

    private static async AAPopulate(product, type, id?, category_detail_id?) {
        if (type === TAG_DEFINE.STORE.AA_PET) {
            switch(false){
                case !id:
                    product = await ProductFactory.getSchema(type)
                        .findById(id)
                        .populate("category_detail_id")
                        .populate("pet_type_id");
                    break;
                case !category_detail_id: 
                    product = await ProductFactory.getSchema(type)
                        .find({category_detail_id})
                        .populate("category_detail_id")
                        .populate("pet_type_id");
                default:
                    product = await ProductFactory.getSchema(type)
                        .find()
                        .populate("category_detail_id")
                        .populate("pet_type_id");
            }
        }

        return product;
    }

    public static async AddProductService(req: any) {
        try {
            const productFactory = ProductFactory.createProduct(req.body, req.headers['type']);
            const product = ProductFactory.createSchema(productFactory, req.headers['type'])
            const result = await product.save()
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.create, 200))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.create, 500);
            });
            return result;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetListProductService(req: any) {
        try {
            const type = req.headers['type'];
            let product = await ProductFactory.getSchema(type).find({});

            product = await this.AAPopulate(product, type);

            const productFactory = product.map(item => ProductFactory.getProduct(item, type));
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async GetListProductsByDetailCategoryIdService(req: any){
        const type = req.headers["type"];
        const {category_detail_id} = req.params;

        try {
            let products = await ProductFactory.getSchema(type).find({
                category_detail_id,
            });

            products = await this.AAPopulate(products, type, null, category_detail_id);

            const productFactory = products.map(item => ProductFactory.getProduct(item, type));

            return productFactory;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async GetListProductsByCategoryIdService(req: any){
        const type = req.headers["type"];
        const {category_id} = req.params;

        try {
            let categories_detail = await CategoryDetailFactory.GetSchema(type).find({category_id});
            let products = [];

            for (let i = 0; i < categories_detail.length; i++) {
                const product = await ProductFactory.getSchema(type).find({category_detail_id: categories_detail[i]._id});
                products = await this.AAPopulate(products, type, null, categories_detail[i]._id);
                products = products.concat(product);
            }

            return products;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async GetDetailProductService(req: any) {
        try {
            const type = req.headers["type"];
            const {id} = req.params || "";
            let product = await ProductFactory.getSchema(type).findById(id)

            product = await this.AAPopulate(product, type, id);
            
            const productFactory = ProductFactory.getProduct(product, type);
            return productFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async UpdateProductService(req: any) {
        try {
            const type = req.headers["type"];
            const currentProduct = await this.GetDetailProductService(req);
            const filters = currentProduct[0] || {};
            const newRequest = {
                ...currentProduct[0],
                ...req.body
            };
            const updateProduct = ProductFactory.createProduct(newRequest, req.query);
            const updateResult = await ProductFactory.getSchema(type)
            .find(filters)
            .updateOne(updateProduct)
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.update, 200))
            .catch((err) => {
                logger.error(err);

                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.update,
                    500
                );
            })

            return updateResult;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async DeleteProductService(req: any){
        const type = req.headers["type"];
        const {id} = req.params;

        try {
            const product = await ProductFactory.getSchema(type);

            const result = await product.findByIdAndDelete(id)
            .then(() => {
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.delete,
                    200
                );
            }).catch(err => {
                logger.error(err)
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.PRODUCT.delete,
                    500
                );
            })

            return result;
        } catch (error) {
            logger.error(error);
        }
    }
}

export default ProductService;