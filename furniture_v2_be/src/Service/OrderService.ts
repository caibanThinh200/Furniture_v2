import lodash from "lodash";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import OrderFactory from "../Factory/Creator/OrderFactory";
import { Request } from "express";

export default class OrderService {
    public static async AddOrderService(req: Request) {
        const type = req.headers["type"] as string;
        try {
            const orderFactory = OrderFactory.createOrder(req.body, type);

            const order = OrderFactory.createSchema(orderFactory, type);

            const result = await order
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.ORDER.CREATE
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        400,
                        { message: err.message },
                        TAG_DEFINE.RESULT.ORDER.CREATE
                    );
                });

            return result;
        } catch (error: any) {
            logger.error(error);
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.ORDER.CREATE
            );
        }
    }

    public static async GetAllOrderByUserIdService(req: Request) {
        const type = req.headers["type"] as string;
        const { id } = req.params;

        try {
            const orders = await OrderFactory.getSchema(type).find({
                user_id: id,
            });

            const orderFactory = orders.map((order) =>
                OrderFactory.getOrder(order, type)
            );

            return CommonFunction.getActionResult(orderFactory, 200, null);
        } catch (error) {
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.ORDER.GET_LIST
            );
        }
    }

    public static async GetDetailOrderService(req: Request) {
        const type = req.headers["type"] as string;
        const { id } = req.params;

        try {
            const order = await OrderFactory.getSchema(type).findById(id);

            const orderFactory = OrderFactory.getOrder(order, type);

            return CommonFunction.getActionResult(orderFactory, 200, null);
        } catch (error) {
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.ORDER.GET_DETAIL
            );
        }
    }

    public static async UpdateOrderService(req: Request) {
        const type = req.headers["type"] as string;
        const { id } = req.params;

        try {
            const order = await OrderFactory.getSchema(type).findById(id);

            lodash.extend(order, req.body);

            const result = await order
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.ORDER.UPDATE
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        400,
                        { message: err.message },
                        TAG_DEFINE.RESULT.ORDER.UPDATE
                    );
                });
            
            return result;
        } catch (error) {
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.ORDER.UPDATE
            );
        }
    }

    public static async DeleteOrderService(req: Request) {
        const type = req.headers["type"] as string;
        const { id } = req.params;

        try {
            await OrderFactory.getSchema(type).findByIdAndDelete(id);

            return CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.ORDER.DELETE);
        } catch (error) {
            return CommonFunction.getActionResult(
                null,
                403,
                { message: error.message },
                TAG_DEFINE.RESULT.ORDER.DELETE
            );
        }
    }
}
