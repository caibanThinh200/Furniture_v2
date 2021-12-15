import express, { Router } from "express";
import PATH from "../Constant/url";
import ProductController from "../Controller/Product.controller";
import logger from "../Config/logger";
import upload from "../Config/multer";

const route: Router = express.Router();

route.post(PATH.APP.start, ProductController.AddProductController);
route.get(PATH.APP.start, ProductController.GetListProductController);
route.get(PATH.PRODUCT.detail, ProductController.GetDetailProductController);
route.put(
    PATH.PRODUCT.detail,
    upload.array("product", 10),
    ProductController.UpdateProductController
);
route.post(PATH.PRODUCT.excel, ProductController.AddProductByExcelController);
route.get(PATH.PRODUCT.filter, ProductController.GetFilterProductController);
route.get(
    PATH.PRODUCT.category,
    ProductController.GetProductsByCategoryIdController
);
route.get(
    PATH.PRODUCT.category_detail,
    ProductController.GetProductsByCategoryDetailIdController
);

export default route;
