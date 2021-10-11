import { Request, Response } from "express";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import PetTypeService from "../Service/PetType.service";
import CommonFunction from "../Utils/function";

export default class PetTypeController {
    public static async GetListPetTypeController(req: Request, res: Response) {}

    public static async GetDetailPetTypeController(
        req: Request,
        res: Response
    ) {}

    public static async CreatePetTypeController(req: Request, res: Response) {}

    public static UpdatePetTypeController(req: Request, res: Response){}

    public static async DeletePetTypeController(req: Request, res: Response) {}
}
