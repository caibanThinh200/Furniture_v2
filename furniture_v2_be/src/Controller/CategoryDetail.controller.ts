import CategoryDetailService from "../Service/CategoryDetail.service";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { Request, Response } from "express";

class CategoryDetailController {
    public static async AddCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryDetailService.AddCategoryDetailService(req);

            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY_DETAIL.create));
        }
    }

    public static async GetListCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryDetailService.GetListCategoryDetailService(req);

            res.status(200).json(result)
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY_DETAIL.getList));
        }
    }

    public static async GetDetailCategoryDetailController(
        req: Request,
        res: Response
    ) {
        try {
            const result =
                await CategoryDetailService.GetCategoryDetailService(req);

            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY_DETAIL.getDetail));
        }
    }

    public static async UpdateCategoryDetailController(req: Request, res: Response) {
        try {
            const result =
                await CategoryDetailService.UpdateCategoryDetailService(req);

            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY_DETAIL.update));
        }
    }

    public static async DeleteCategoryDetailController(req: Request, res: Response) {
        try {
            const result =
                await CategoryDetailService.DeleteCategoryDetailService(req);

            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete));
        }
    }
}

export default CategoryDetailController;
