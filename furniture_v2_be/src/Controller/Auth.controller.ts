import AuthService from "../Service/Auth.service";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { Request, Response } from "express";

class AuthController {
    public static async Login(req: Request, res: Response) {
        try {
            const result = await AuthService.LoginService(req);
            
            res.status(200).json(result)
        } catch (error) {
            logger.error(error);
            res.status(500).json(CommonFunction.getActionResult(null, 500, error, TAG_DEFINE.RESULT.AUTH.LOGIN.failed));
        }
    }

    public static async Register(req: Request, res: Response) {
        try {
            const result = await AuthService.RegisterService(req);

            console.log(result)
            
            res.status(200).json(result);
        } catch (error) {
            logger.error(error);
            res.status(500).json(CommonFunction.getActionResult(null, 500, error, TAG_DEFINE.RESULT.AUTH.REGISTER));
        }
    }

    public static async GetDetailUserController(req: Request, res: Response) {
        try {
            const result = await AuthService.GetDetailUserService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.AUTH.getDetail));
        }
    }

    public static async UpdateUserController(req: Request, res: Response) {
        try {
            const result = await AuthService.UpdateUserService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.AUTH.update));
        }
    }

    public static async GetUserByJWTController(req: Request, res: Response) {
        try {
            const result = await AuthService.GetUserByJWT(req);
            
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.AUTH.getDetail));
        }
    }
}

export default AuthController;
