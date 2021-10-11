import CategoryService from '../Service/Category.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class CategoryController { 
    public static async AddCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.AddCategoryService(req);
            res.status(201).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY.create));
        }
        
    }

    public static async GetListCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.GetListCategoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY.getList));
        }
    }

    public static async GetDetailCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.GetDetailCategoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY.getDetail));
        }
    }

    public static async UpdateCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.UpdateCategoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY.update));
        }
    }

    public static async DeleteCategoryController(req: Request, res: Response){
        try {
            const result = await CategoryService.DeleteCategoryService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.CATEGORY.delete));
        }
    }
}

export default CategoryController;