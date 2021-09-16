import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductController from '../Controller/Product.controller';
import logger from '../config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.APP.params.replace("params", "id"), ProductController.GetDetailProductController);
route.put(PATH.APP.params.replace("params", "id"), ProductController.UpdateProductController);

export default route;