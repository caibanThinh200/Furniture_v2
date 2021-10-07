import CommonFunction from "../Utils/function";
import TAG_DEFINE from "../Constant/define";
import {Request, Response} from 'express'
import OrderService from '../Service/OrderService';
import logger from "../Config/logger";

export default class OrderController{
    public static async CreateOrderController(request: Request, response: Response){
        try {
            const result = await OrderService.AddOrderService(request);

            response.status(201).json({
                status: TAG_DEFINE.STATUS.sucess,
                ...result
            })
        } catch (error) {
            logger.error(error);
            response.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {message: error.message},
                result: null,
            })
        }
    }
    public static async GetAllOrdersByUserIdController(request: Request, response: Response){
        try {
            const result = await OrderService.GetAllOrderByUserIdService(request);

            response.status(201).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);
            response.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {message: error.message},
                result: null,
            })
        }
    }
    public static async GetDetailOrderController(request: Request, response: Response){
        try {
            const result = await OrderService.GetDetailOrderService(request);

            response.status(201).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);
            response.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {message: error.message},
                result: null,
            })
        }
    }
    public static async UpdateOrderController(request: Request, response: Response){
        try {
            const result = await OrderService.UpdateOrderService(request);

            response.status(201).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);
            response.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {message: error.message},
                result: null,
            })
        }
    }
    public static async DeleteOrderController(request: Request, response: Response){
        try {
            const result = await OrderService.DeleteOrderService(request);

            response.status(201).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);
            response.status(500).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {message: error.message},
                result: null,
            })
        }
    }
}