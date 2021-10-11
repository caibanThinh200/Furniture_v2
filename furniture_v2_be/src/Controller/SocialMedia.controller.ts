import SocialMediaService from '../Service/SocialMedia.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class SocialMediaController {
    public static async AddSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.AddSocialMediaService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.create));
        }
    }

    public static async GetListSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.GetListSocialMediaService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.getList));
        }
    }

    public static async GetDetailSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.GetDetailSocialMediaService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.getDetail));
        }
    }

    public static async UpdateSocialMediaController(req: Request, res: Response) {
        try {
            const result = await SocialMediaService.UpdateSocialMediaService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(500).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.update));
        }
    }
}

export default SocialMediaController;