import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { CategoryFactory } from "../Factory/Creator/CategoryFactory";
import lodash from 'lodash'

class CategoryService {
    public static async AddCategoryService(req: any) {
        const type = req.headers["type"];
        try {
            const categoryFactory = CategoryFactory.createCategory(req.body, req.headers.type);
            const rootCategory = CategoryFactory.createSchema(categoryFactory, req.headers.type)
            const result = await rootCategory.save()
            .then(() => CommonFunction.getActionResult(null, 201, null, TAG_DEFINE.RESULT.CATEGORY.create))
            .catch(e => {
                logger.error(e);
                return CommonFunction.getActionResult(null, 403, e, TAG_DEFINE.RESULT.CATEGORY.create);
            });
            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.CATEGORY.create);
        }
    }

    public static async GetListCategoryService(req: any) {
        try {
            const type = req.headers["type"];
            const category = await CategoryFactory.getSchema(type).find();
            const categoryFactory = category.map(item => CategoryFactory.getCategory(item, type));
            return CommonFunction.getActionResult(categoryFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.CATEGORY.getList);
        }
    }

    public static async GetDetailCategoryService(req: any) {
        try {
            const type = req.headers['type'];
            const {id} = req.params || "";

            const category = await CategoryFactory.getSchema(type).findById(id);
            const categoryFactory = CategoryFactory.getCategory(category, type);
            return CommonFunction.getActionResult(categoryFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.CATEGORY.getDetail);
        }
    }

    public static async UpdateCategoryService(req: any) {
        try {
            const type = req.headers["type"];
            const {id} = req.params || "";
            const currentcategory = await this.GetDetailCategoryService(req);
            const filters = currentcategory[0] || {};
            const newRequest = {
                ...currentcategory[0],
                ...req.body
            };
            const updatecategory = CategoryFactory.createCategory(newRequest, req.query);
            const updateResult = await CategoryFactory.getSchema(type)
            .find(filters)
            .updateOne(updatecategory)
            .then(() => CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.CATEGORY.update))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(null, 403, err, TAG_DEFINE.RESULT.CATEGORY.update);
            })
            

            return updateResult;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(null, 400, e, TAG_DEFINE.RESULT.CATEGORY.update);
        }
    }

    public static async DeleteCategoryService(req: any){
        const type = req.headers['type'];
        const {id} = req.params || "";
        try {
            const result = await CategoryFactory.getSchema(type).findByIdAndDelete(id)
            .then(() => {
                return CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.CATEGORY.delete);
            }).catch((e) => {
                logger.error(e)
                return CommonFunction.getActionResult(null, 403, null, TAG_DEFINE.RESULT.CATEGORY.delete);
            });

            return result
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(null, 400, error, TAG_DEFINE.RESULT.CATEGORY.update);

        }
    }
}

export default CategoryService;
