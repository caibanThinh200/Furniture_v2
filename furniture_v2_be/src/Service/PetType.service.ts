import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import PetType from "../models/PetType";
import logger from "../Config/logger";
import lodash from 'lodash'

export default class PetTypeService {
    public static async GetListPetTypeService(req: any) {
        const type = req.headers["type"];

        if (type !== TAG_DEFINE.STORE.AA_PET) return;

        try {
            const result = await PetType.find();

            return result;
        } catch (error) {
            logger.error(error);

            return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.GET_LIST, 500);
        }
    }

    public static async GetDetailPetTypeService(req: any) {
        const type = req.headers["type"];
        const {id} = req.params;

        if (type !== TAG_DEFINE.STORE.AA_PET) return;

        try {
            const result = await PetType.findById(id);
            
            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.PET_TYPE.GET_DETAIL,
                500
            );
        }
    }

    public static async CreatePetTypeService(req: any) {
        const type = req.headers["type"];

        if (type !== TAG_DEFINE.STORE.AA_PET) return;

        try {
            const pet_type = new PetType(req.body);

            const result = await pet_type.save()
                .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.CREATE, 200))
                .catch(err => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.CREATE,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.PET_TYPE.CREATE,
                500
            );
        }
    }

    public static async UpdatePetTypeService(req: any){
        const type = req.headers["type"];
        const { id } = req.params; 

        if (type !== TAG_DEFINE.STORE.AA_PET) return;

        try {
            const pet_type = await PetType.findById(id);
            lodash.extend(pet_type, req.body);

            const result = await pet_type.save()
                .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.UPDATE, 200))
                .catch(err => {
                    logger.error(err);

                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.PET_TYPE.UPDATE,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.UPDATE, 500);
        }
    }

    public static async DeletePetTypeService(req: any){
        const type = req.headers["type"];
        const { id } = req.params;

        if (type !== TAG_DEFINE.STORE.AA_PET) return;

        try {
            const result = await PetType.findByIdAndDelete(id)
                .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.DELETE, 200))
                .catch(err => {
                    logger.error(err);
                    return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.DELETE, 500);
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(TAG_DEFINE.RESULT.PET_TYPE.DELETE, 500);
        }
    }
}
