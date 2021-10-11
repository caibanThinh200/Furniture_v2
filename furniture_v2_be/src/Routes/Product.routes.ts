import express, {Router} from "express";
import PATH from '../Constant/url';
import ProductController from '../Controller/Product.controller';
import logger from '../Config/logger';

const route: Router = express.Router();

route.post(PATH.APP.start, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.PRODUCT.category, ProductController.GetListProductByCategoryIdController);
route.get(PATH.PRODUCT.category_detail, ProductController.GetListProductByCategoryDetailIdController);
route.get(PATH.PRODUCT.detail, ProductController.GetDetailProductController);
route.put(PATH.PRODUCT.detail, ProductController.UpdateProductController);
route.post(PATH.PRODUCT.excel, ProductController.AddProductByExcelController);
route.get(PATH.PRODUCT.filter, ProductController.GetFilterProductController);

export default route;