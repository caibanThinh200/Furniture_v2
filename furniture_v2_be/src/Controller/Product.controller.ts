import ProductService from '../Service/Product.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class ProductController {
    public static async AddProductByExcelController(req: Request, res: Response) {
        try {
            const result = await ProductService.AddProductByExcelService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.create));
        }
    }

    public static async AddProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.AddProductService(req)
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.create));
        }
    }

    public static async GetListProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetListProductService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.getList));
        }
    }

    public static async GetFilterProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetFilterProductService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.getList));
        }
    }

    public static async GetListProductByCategoryIdController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetListProductByCategoryId(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(
                CommonFunction.getActionResult(
                    null,
                    500,
                    e,
                    TAG_DEFINE.RESULT.PRODUCT.getList
                )
            );

        }
    }

    public static async GetListProductByCategoryDetailIdController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetListProductByCategoryDetailId(req);
            res.status(200).json(result);
        } catch (e) {
            logger.error(e);
            res.status(500).json(
                CommonFunction.getActionResult(
                    null,
                    500,
                    e,
                    TAG_DEFINE.RESULT.PRODUCT.getList
                )
            );
        }
    }

    public static async GetDetailProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetDetailProductService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.getDetail));
        }
    }

    public static async UpdateProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.UpdateProductService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.update));
        }
    }

    public static async DeleteProductController(req: Request, res: Response){
        try {
            const result = await ProductService.DeleteProductService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.PRODUCT.delete));
        }
    }
}

export default ProductController;