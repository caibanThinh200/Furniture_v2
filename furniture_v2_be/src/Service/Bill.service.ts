import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import BillFactory from "../Factory/Creator/BillFactory";

class BillService {
    public static async AddBillService(req: any) {
        try {
            console.log(req.body);
            const billFactory = BillFactory.createBill(
                req.body,
                req.headers["type"]
            );
            const bill = BillFactory.createSchema(
                billFactory,
                req.headers["type"]
            );
            const result = await bill
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.BILL.create,
                        200
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.BILL.create,
                        500
                    );
                });
            return result;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetListBillService(req: any) {
        try {
            const type = req.headers["type"];
            const bill = await BillFactory.getSchema(type)
                .find()
                .populate("user_id")
                .populate({
                    path: "products",
                    populate: {
                        path: "product_id"
                    }
                });
            const billFactory = bill.map((item) =>
                BillFactory.getBill(item, type)
            );
            return billFactory;
        } catch (e) {
            logger.error(e);
        }
    }

    public static async GetDetailBillService(req: any) {
        try {
            const type = req.headers["type"];
            const { id } = req.params || "";
            const bill = await BillFactory.getSchema(type)
                .findById(id)
                .populate("user_id")
                .populate({
                    path: "products",
                    populate: {
                        path: "product_id",
                    },
                });
            const billFactory = BillFactory.getBill(bill, type);
            return billFactory;
        } catch (e) {
            logger.error(e);
        }
    }
}

export default BillService;
