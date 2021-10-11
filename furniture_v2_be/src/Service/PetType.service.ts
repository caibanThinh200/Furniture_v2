import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import PetType from "../models/PetType";
import logger from "../Config/logger";
import lodash from 'lodash'

export default class PetTypeService {
    public static async GetListPetTypeService(req: any) {
        const type = req.headers["type"];

        
    }

    public static async GetDetailPetTypeService(req: any) {
        const type = req.headers["type"];
        const {id} = req.params;

        
    }

    public static async CreatePetTypeService(req: any) {
        const type = req.headers["type"];

        
    }

    public static async UpdatePetTypeService(req: any){
        const type = req.headers["type"];
        const { id } = req.params; 

        
    }

    public static async DeletePetTypeService(req: any){
        const type = req.headers["type"];
        const { id } = req.params;

        
    }
}
