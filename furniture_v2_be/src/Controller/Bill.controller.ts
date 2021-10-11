import BillService from '../Service/Bill.service';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';
import CommonFunction from '../Utils/function';
import {Request, Response} from "express"

class BillController {
    public static async AddBillController(req: Request, res: Response) {
        try {
            const result = await BillService.AddBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.create));
        }
    }

    public static async GetListBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetListBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.getList));
        }
    }

    public static async GetDetailBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetDetailBillService(req);
            res.status(200).json(result);
        } catch(e) {
            logger.error(e);
            res.status(400).json(CommonFunction.getActionResult(null, 500, e, TAG_DEFINE.RESULT.BILL.getDetail));
        }
    }
}

export default BillController;
