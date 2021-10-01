import { Request, Response } from "express";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import PetTypeService from "../Service/PetType.service";
import CommonFunction from "../Utils/function";

export default class PetTypeController {
    public static async GetListPetTypeController(req: Request, res: Response) {
        try {
            const result = await PetTypeService.GetListPetTypeService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.GET_LIST,
                        500
                    ),
                },
            });
        }
    }

    public static async GetDetailPetTypeController(
        req: Request,
        res: Response
    ) {
        try {
            const result = await PetTypeService.GetDetailPetTypeService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.GET_DETAIL,
                        500
                    ),
                },
            });
        }
    }

    public static async CreatePetTypeController(req: Request, res: Response) {
        try {
            const result = await PetTypeService.CreatePetTypeService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.CREATE,
                        500
                    ),
                },
            });
        }
    }

    public static async UpdatePetTypeController(req: Request, res: Response) {
        try {
            const result = await PetTypeService.UpdatePetTypeService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.UPDATE,
                        500
                    ),
                },
            });
        }
    }

    public static async DeletePetTypeController(req: Request, res: Response) {
        try {
            const result = await PetTypeService.DeletePetTypeService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    message: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.DELETE,
                        500
                    ),
                },
            });
        }
    }
}
