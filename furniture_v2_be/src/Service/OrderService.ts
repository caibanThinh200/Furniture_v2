import lodash from "lodash";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import OrderFactory from "../Factory/Creator/OrderFactory";

export default class OrderService {
    public static async AddOrderService(req: any) {
        const type = req.headers["type"];
        
    }

    public static async GetAllOrderByUserIdService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        
    }

    public static async GetDetailOrderService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        
    }

    public static async UpdateOrderService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        
    }

    public static async DeleteOrderService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        
    }
}
