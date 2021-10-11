import ExcelGenerator from "../Config/excelParser";
import logger from "../Config/logger";
import TAG_DEFINE, { DEFINE_INFOMATION } from "../Constant/define";
import CategoryDetailFactory from "../Factory/Creator/CategoryDetailFactory";
import { CategoryFactory } from "../Factory/Creator/CategoryFactory";
import { ProductFactory } from "../Factory/Creator/ProductFactory";
import CommonFunction from "../Utils/function";

class ProductService {
    public static async AddProductByExcelService(req: any) {
        try {
            const initProduct = ProductFactory.createProduct(
                null,
                req.headers["type"]
            );
            const dataField = {
                path: DEFINE_INFOMATION.PRODUCT_EXCEL,
                objects: Object.keys(initProduct),
            };
            const listData = new ExcelGenerator(dataField)["data"]["Sheet1"];
            return Promise.all(
                listData.map(
                    async (item) =>
                        await this.AddProductService({ ...req, body: item })
                )
            );
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    public static async AddProductService(req: any) {
        try {
            const productFactory = ProductFactory.createProduct(
                req.body,
                req.headers["type"]
            );
            const product = ProductFactory.createSchema(
                productFactory,
                req.headers["type"]
            );
            const result = await product
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        201,
                        null,
                        TAG_DEFINE.RESULT.PRODUCT.create
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        null,
                        403,
                        e,
                        TAG_DEFINE.RESULT.PRODUCT.create
                    );
                });
            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.PRODUCT.create
            );
        }
    }

    public static async GetListProductService(req: any) {
        try {
            const type = req.headers["type"];
            const product = await ProductFactory.getSchema(type).find({});
            const productFactory = product.map((item) =>
                ProductFactory.getProduct(item, type)
            );
            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetFilterProductService(req: any) {
        try {
            const type = req.headers["type"];
            const startIndex =
                ((req?.query?.page_index || 1) - 1) *
                (req?.query?.page_size || 10);
            const endIndex =
                (req?.query?.page_index || 1) * (req?.query?.page_size || 10);
            let arr = await this.GetListProductService(req);
            const rootCategories =
                req.query.cate &&
                (await CategoryFactory.getSchema(type).find());
            if (req.query.cate) {
                (
                    CommonFunction.generateTreeData(rootCategories, []) || []
                ).forEach((item) => {
                    if ((item as any).name === req.query?.cate) {
                        arr = item?.products || [];
                    }
                });
            }
            const filterProduct = arr.result.map(async (id) => {
                const product = await ProductFactory.getSchema(type).findOne({
                    _id: id,
                });
                return ProductFactory.getProduct(product, type);
            });
            const filterPromise = await Promise.all(filterProduct);
            return filterPromise.slice(startIndex, endIndex);
        } catch (e) {
            logger.error(e);
            return false;
        }
    }

    public static async GetDetailProductService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            let product = await ProductFactory.getSchema(type).findById(id);

            const productFactory = ProductFactory.getProduct(product, type);
            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.PRODUCT.getDetail
            );
        }
    }

    public static async UpdateProductService(req: any) {
        try {
            const type = req.headers["type"];
            const currentProduct = await this.GetDetailProductService(req);
            const filters = currentProduct[0] || {};
            const newRequest = {
                ...currentProduct[0],
                ...req.body,
            };
            const updateProduct = ProductFactory.createProduct(
                newRequest,
                req.query
            );
            const updateResult = await ProductFactory.getSchema(type)
                .find(filters)
                .updateOne(updateProduct)
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.PRODUCT.update
                    )
                )
                .catch((err) => {
                    logger.error(err);

                    return CommonFunction.getActionResult(
                        null,
                        403,
                        err,
                        TAG_DEFINE.RESULT.PRODUCT.update
                    );
                });
            return updateResult;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.PRODUCT.update
            );
        }
    }

    public static async DeleteProductService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const product = await ProductFactory.getSchema(type);

            const result = await product
                .findByIdAndDelete(id)
                .then(() => {
                    return CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.PRODUCT.delete
                    );
                })
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        403,
                        err,
                        TAG_DEFINE.RESULT.PRODUCT.delete
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                400,
                error,
                TAG_DEFINE.RESULT.PRODUCT.delete
            );
        }
    }

    public static async GetListProductByCategoryDetailId(req: any) {
        const { category_detail_id } = req.params;
        const type = req.headers["type"];

        //Only AA store
        if (type !== TAG_DEFINE.STORE.AA_PET) {
            return CommonFunction.getActionResult(
                null,
                401,
                { message: "You do not have permission to access this route!" },
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }

        try {
            const products = await ProductFactory.getSchema(type).find({
                category_detail_id,
            });

            const productFactory = products.map((product) =>
                ProductFactory.getProduct(product, type)
            );

            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (error: any) {
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }
    }

    public static async GetListProductByCategoryId(req: any) {
        const { category_id } = req.params;
        const type = req.headers["type"];

        //Only AA store
        if (type !== TAG_DEFINE.STORE.AA_PET) {
            return CommonFunction.getActionResult(
                null,
                401,
                { message: "You do not have permission to access this route!" },
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }

        try {
            let category_detail = await CategoryDetailFactory.GetSchema(type).find({category_id});

            category_detail = category_detail.map((_cd: any) => _cd._id);

            const products = await ProductFactory.getSchema(type).find({category_detail_id: {$in: category_detail}});

            const productFactory = products.map((product) => ProductFactory.getProduct(product, type)); 

            return CommonFunction.getActionResult(productFactory, 200, null);

        } catch (error: any) {
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }
    }
}

export default ProductService;
