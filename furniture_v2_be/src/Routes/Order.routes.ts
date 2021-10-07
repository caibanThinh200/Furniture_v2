import {Router} from 'express'
import PATH from '../Constant/url';
import controller from '../Controller/Order.controller';

const router = Router();

router.get(PATH.ORDER.user_id, controller.GetAllOrdersByUserIdController);
router.get(PATH.APP.params.replace("params", "id"), controller.GetDetailOrderController);
router.post(PATH.APP.start, controller.CreateOrderController);
router.put(PATH.APP.params.replace("params", "id"), controller.UpdateOrderController);
router.delete(PATH.APP.params.replace("params", "id"), controller.DeleteOrderController);

export default router;