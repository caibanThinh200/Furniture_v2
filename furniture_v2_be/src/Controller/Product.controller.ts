import ProductService from '../Service/Product.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class ProductController {
    public static async AddProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.AddProductService(req)
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.create, 500)
                }
            });
        }
    }

    public static async GetListProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetListProductService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.getList, 500)
                }
            });
        }
    }

    public static async GetListProductByCategoryIdController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetListProductsByCategoryIdService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PRODUCT.getList,
                        500
                    ),
                },
            });
        }
    }

    public static async GetListProductByCategoryDetailIdController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetListProductsByDetailCategoryIdService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PRODUCT.getList,
                        500
                    ),
                },
            });
        }
    }

    public static async GetDetailProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetDetailProductService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.getDetail, 500)
                }
            });
        }
    }

    public static async UpdateProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.UpdateProductService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.update, 500)
                }
            });
        }
    }

    public static async DeleteProductController(req: Request, res: Response){
        try {
            const result = await ProductService.DeleteProductService(req);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.PRODUCT.delete, 500)
                }
            });
        }
    }
}

export default ProductController;