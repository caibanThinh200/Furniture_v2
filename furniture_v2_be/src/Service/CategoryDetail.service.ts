import lodash from "lodash";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import CategoryDetailFactory from "../Factory/Creator/CategoryDetailFactory";

export default class CategoryDetailService {
    public static async AddCategoryDetailService(req: any) {
        const type = req.headers["type"];
        try {
            const categoryDetailFactory =
                CategoryDetailFactory.CreateCategoryDetail(req.body, type);
            const categoryDetail = CategoryDetailFactory.CreateSchema(
                categoryDetailFactory,
                type
            );

            const result = await categoryDetail
                .save()
                .then(() =>
                    CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.CATEGORY_DETAIL.create)
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(null, 403, null, TAG_DEFINE.RESULT.CATEGORY_DETAIL.create);
                });
                return result;
            } catch (error) {
                logger.error(error);
                return CommonFunction.getActionResult(null, 400, error, TAG_DEFINE.RESULT.CATEGORY_DETAIL.create);
        }
    }

    public static async GetListCategoryDetailService(req: any) {
        const type = req.headers["type"];
        try {
            const list_category_detail = await CategoryDetailFactory.GetSchema(
                type
            )
                .find()
                .populate("category_id");
            const result = list_category_detail.map((item) =>
                CategoryDetailFactory.GetCategoryDetail(item, type)
            );
            return CommonFunction.getActionResult(result, 200, null);
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(null, 400, error, TAG_DEFINE.RESULT.CATEGORY_DETAIL.getList);
        }
    }

    public static async GetCategoryDetailService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const categoryDetail = await CategoryDetailFactory.GetSchema(type)
                .findById(id)
                .populate("category_id");

            const result = CategoryDetailFactory.GetCategoryDetail(
                categoryDetail,
                type
            );

            return CommonFunction.getActionResult(result, 200, null);
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(null, 400, error, TAG_DEFINE.RESULT.CATEGORY_DETAIL.getDetail);

        }
    }

    public static async UpdateCategoryDetailService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const categoryDetail = await CategoryDetailFactory.GetSchema(
                type
            ).findById(id);

            lodash.extend(categoryDetail, req.body);

            const result = await categoryDetail
                .save()
                .then(() =>
                    CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.CATEGORY_DETAIL.update)
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(null, 403, err, TAG_DEFINE.RESULT.CATEGORY_DETAIL.update);
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(null, 400, error, TAG_DEFINE.RESULT.CATEGORY_DETAIL.update);
        }
    }

    public static async DeleteCategoryDetailService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;

        try {
            const result = await CategoryDetailFactory.GetSchema(type)
                .findByIdAndDelete(id)
                .then(() =>
                    CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete)
                    )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(null, 403, null, TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete)
                });
            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(null, 400, null, TAG_DEFINE.RESULT.CATEGORY_DETAIL.delete)
        }
    }
}
