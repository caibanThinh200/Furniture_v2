import CommonFunction from "../Utils/function";
import TAG_DEFINE from "../Constant/define";
import { Request, Response } from "express";
import OrderService from "../Service/OrderService";
import logger from "../Config/logger";

export default class OrderController {
    public static async CreateOrderController(
        request: Request,
        response: Response
    ) {
        try {
            const result = await OrderService.AddOrderService(request);

            response.status(200).json(result);
        } catch (error) {
            logger.error(error);
            response
                .status(500)
                .json(
                    CommonFunction.getActionResult(
                        null,
                        500,
                        { message: error.message },
                        TAG_DEFINE.RESULT.ORDER.CREATE
                    )
                );
        }
    }
    public static async GetAllOrdersByUserIdController(
        request: Request,
        response: Response
    ) {
        try {
            const result = await OrderService.GetAllOrderByUserIdService(
                request
            );

            response.status(200).json(result);
        } catch (error) {
            response
                .status(500)
                .json(
                    CommonFunction.getActionResult(
                        null,
                        500,
                        { message: error.message },
                        TAG_DEFINE.RESULT.ORDER.GET_LIST
                    )
                );
        }
    }
    public static async GetDetailOrderController(
        request: Request,
        response: Response
    ) {
        try {
            const result = await OrderService.GetDetailOrderService(request);

            response.status(200).json(result);
        } catch (error) {
            response
                .status(500)
                .json(
                    CommonFunction.getActionResult(
                        null,
                        500,
                        { message: error.message },
                        TAG_DEFINE.RESULT.ORDER.GET_DETAIL
                    )
                );
        }
    }
    public static async UpdateOrderController(
        request: Request,
        response: Response
    ) {
        try {
            const result = await OrderService.UpdateOrderService(request);

            response.status(200).json(result);
        } catch (error) {
            response
                .status(500)
                .json(
                    CommonFunction.getActionResult(
                        null,
                        500,
                        { message: error.message },
                        TAG_DEFINE.RESULT.ORDER.UPDATE
                    )
                );
        }
    }
    public static async DeleteOrderController(
        request: Request,
        response: Response
    ) {
        try {
            const result = await OrderService.DeleteOrderService(request);

            response.status(200).json(result);
        } catch (error) {
            response
                .status(500)
                .json(
                    CommonFunction.getActionResult(
                        null,
                        500,
                        { message: error.message },
                        TAG_DEFINE.RESULT.ORDER.DELETE
                    )
                );
        }
    }
}
