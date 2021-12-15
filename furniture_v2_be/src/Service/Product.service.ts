import { ProductTypeFactory } from "./../Factory/Creator/ProductTypeFactory";
import ExcelGenerator from "../Config/excelParser";
import logger from "../Config/logger";
import TAG_DEFINE, { DEFINE_INFOMATION } from "../Constant/define";
import { CategoryFactory } from "../Factory/Creator/CategoryFactory";
import { ProductFactory } from "../Factory/Creator/ProductFactory";
import CommonFunction from "../Utils/function";
import * as _ from "lodash";

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
            logger.error(e);
            return false;
        }
    }

    public static async AddProductService(req: any) {
        const type = req.headers["type"];

        try {
            const productFactory = ProductFactory.createProduct(req.body, type);
            const product = ProductFactory.createSchema(productFactory, type);
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
            return CommonFunction.getActionResult(
                filterPromise.slice(startIndex, endIndex),
                200,
                null
            );
        } catch (e) {
            logger.error(e);
            return false;
        }
    }

    public static async GetProductsByCategoryDetailIdService(req: any) {
        const type = req.headers["type"];
        const { category_detail_id } = req.params;

        try {
            const products = await ProductFactory.getSchema(type).find({
                category_detail_id,
            });

            const productFactory = products.map((product) =>
                ProductFactory.getProduct(product, type)
            );

            return CommonFunction.getActionResult(productFactory, 200, null);
        } catch (error: any) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                400,
                error,
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }
    }

    public static async GetProductsByCategoryIdService(req: any) {
        const type = req.headers["type"];
        const { categoryId } = req.params;
        try {
            const category = await CategoryFactory.getSchema(type).findById(
                categoryId
            );

            if (category) {
                const ids = category.childCate.map(cate => cate._id)

                const products = await ProductFactory.getSchema(type).find({
                    category_detail_id: { $in: ids },
                });

                const productFactory = products.map((product) =>
                    ProductFactory.getProduct(product, type)
                );

                return CommonFunction.getActionResult(
                    productFactory,
                    200,
                    null
                );
            }

            return CommonFunction.getActionResult([], 200, null)
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                400,
                error,
                TAG_DEFINE.RESULT.PRODUCT.getList
            );
        }
    }

    public static async GetDetailProductService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const product = await ProductFactory.getSchema(type).findById(id);
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
            const filters = currentProduct?.result || {};
            let images = [];
            Object.values(req?.files).map((m, n) => {
                return (req.body?.role || []).map((i, k) => {
                    if (n === k) {
                        images.push({
                            ...(m as Object),
                            role: i,
                            name: req.body?.name,
                        });
                    }
                });
            });
            const newRequest = {
                ...currentProduct?.result,
                ..._.omit(req.body, ["role"]),
                images,
            };
            const updateProduct = ProductFactory.createProduct(
                newRequest,
                type
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
}

export default ProductService;
