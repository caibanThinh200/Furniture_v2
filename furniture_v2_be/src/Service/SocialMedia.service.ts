import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from "../Utils/function";
import { SocialMediaFactory } from '../Factory/Creator/SocialMediaFactory';


class SocialMediaService {

    public static async AddSocialMediaService(req: any) {
        try {
            const socialMediaFactory = SocialMediaFactory.createSocialMedia(req.body, req.headers['type']);
            const socialMedia = SocialMediaFactory.createSchema(socialMediaFactory, req.headers['type'])
            const result = await socialMedia.save()
            .then(() => CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.SOCIAL_MEDIA.create))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(null, 403, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.create);
            });
            return result;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.create);
        }
    }

    public static async GetListSocialMediaService(req: any) {
        try {
            const type = req.headers['type'];
            const socialMedia = await SocialMediaFactory.getSchema(type).find({type});
            const socialMediaFactory = socialMedia.map(item => SocialMediaFactory.getSocialMedia(item, type));
            return CommonFunction.getActionResult(socialMediaFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.getList);
        }
    }

    public static async GetDetailSocialMediaService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";
            const socialMedia = await SocialMediaFactory.getSchema(type).find({
                type,
                _id: id
            });
            const socialMediaFactory = socialMedia.map(item => SocialMediaFactory.getSocialMedia(item, type));
            return CommonFunction.getActionResult(socialMediaFactory, 200, null);
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.getDetail);
        }
    }

    public static async UpdateSocialMediaService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";
            const currentSocialMedia = await this.GetDetailSocialMediaService(req);
            const filters = currentSocialMedia[0] || {};
            const newRequest = {
                ...currentSocialMedia[0],
                ...req.body
            };
            const updateSocialMedia = SocialMediaFactory.createSocialMedia(newRequest, req.query);
            const updateResult = await SocialMediaFactory.getSchema(type)
            .find(filters)
            .updateOne(updateSocialMedia)
            .then(() => CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.SOCIAL_MEDIA.update))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(null, 403, err, TAG_DEFINE.RESULT.SOCIAL_MEDIA.update);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.SOCIAL_MEDIA.update);
        }
    }
}

export default SocialMediaService;