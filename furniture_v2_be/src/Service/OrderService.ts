import lodash from "lodash";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import OrderFactory from "../Factory/Creator/OrderFactory";

export default class OrderService {
    public static async AddOrderService(req: any) {
        const type = req.headers["type"];
        try {
            const orderFactory = OrderFactory.createOrder(req.body, type);

            const order = OrderFactory.createSchema(orderFactory, type);

            const result = await order
                .save()
                .then(() => {
                    return {
                        result: CommonFunction.getActionResult(
                            TAG_DEFINE.RESULT.ORDER.CREATE,
                            200
                        ),
                        error: null,
                    };
                })
                .catch((err) => {
                    logger.error(err);
                    return {
                        result: CommonFunction.getActionResult(
                            TAG_DEFINE.RESULT.ORDER.CREATE,
                            500
                        ),
                        error: {
                            code: 400,
                            message: err.message,
                        },
                    };
                });

            return result;
        } catch (error) {
            logger.error(error);
            return {
                result: CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.ORDER.CREATE,
                    500
                ),
                error: {
                    code: 500,
                    message: error.message,
                },
            };
        }
    }

    public static async GetAllOrderByUserIdService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        try {
            let orders = await OrderFactory.getSchema(type).find();

            if (type === TAG_DEFINE.STORE.AA_PET) {
                orders = await OrderFactory.getSchema(type)
                    .find({ user_id: id })
                    .populate({
                        path: "products",
                        populate: {
                            path: "product_id",
                        },
                    });
            }

            const result = orders.map((item) =>
                OrderFactory.getOrder(item, type)
            );

            return result;
        } catch (error) {
            logger.error(error);
            return {
                result: CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.ORDER.GET_LIST,
                    500
                ),
                error: {
                    code: 500,
                    message: error.message,
                }
            };
        }
    }

    public static async GetDetailOrderService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        try {
            let order = await OrderFactory.getSchema(type).findById(id);

            if (type === TAG_DEFINE.STORE.AA_PET) {
                order = await OrderFactory.getSchema(type)
                    .findById(id)
                    .populate({
                        path: "products",
                        populate: {
                            path: "product_id",
                        },
                    });
            }

            const result = OrderFactory.getOrder(order, type);

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.ORDER.GET_DETAIL,
                500
            );
        }
    }

    public static async UpdateOrderService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        try {
            let order = await OrderFactory.getSchema(type).findById(id);

            if (type === TAG_DEFINE.STORE.AA_PET) {
                order = await OrderFactory.getSchema(type)
                    .findById(id)
                    .populate({
                        path: "products",
                        populate: {
                            path: "product_id",
                        },
                    });
            }

            lodash.extend(order, req.body);

            const result = await order
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.ORDER.UPDATE,
                        200
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.ORDER.UPDATE,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.ORDER.UPDATE,
                500
            );
        }
    }

    public static async DeleteOrderService(req: any) {
        const type = req.headers["type"];
        const { id } = req.params;
        try {
            let result = await OrderFactory.getSchema(type)
                .findByIdAndDelete(id)
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.ORDER.DELETE,
                        200
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.ORDER.DELETE,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
            return CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.ORDER.DELETE,
                500
            );
        }
    }
}
