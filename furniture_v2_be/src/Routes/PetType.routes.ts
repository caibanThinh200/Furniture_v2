import express, {Router} from "express";
import TAG_DEFINE from "../Constant/define";
import PATH from "../Constant/url";
import controller from '../Controller/PetType.controller';

const router = Router();

router.get(PATH.APP.start, controller.GetListPetTypeController);
router.get(PATH.APP.params.replace("params", "id"), controller.GetDetailPetTypeController);
router.post(PATH.APP.start, controller.CreatePetTypeController);
router.put(PATH.APP.params.replace("params", "id"), controller.UpdatePetTypeController);
router.delete(PATH.APP.params.replace("params", "id"), controller.DeletePetTypeController);

export default router;