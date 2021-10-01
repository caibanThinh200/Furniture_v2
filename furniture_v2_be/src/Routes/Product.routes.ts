import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductController from '../Controller/Product.controller';
import logger from '../Config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.APP.params.replace("params", "id"), ProductController.GetDetailProductController);
route.get(`/category/:category_id`, ProductController.GetListProductByCategoryIdController);
route.get(`/category-detail/:category_detail_id`, ProductController.GetListProductByCategoryDetailIdController);
route.put(PATH.APP.params.replace("params", "id"), ProductController.UpdateProductController);
route.delete(PATH.APP.params.replace("params", "id"), ProductController.DeleteProductController);

export default route;