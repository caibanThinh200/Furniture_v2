import ProductRoute from "./Product.routes";
import AuthRoute from "./Auth.routes";
import CateRoute from "./Category.routes";
import SocialMediaRoute from "./SocialMedia.routes";
import BillRoute from "./Bill.routes";
import CategoryDetailRoute from "./CategoryDetail.routes";
import PetTypeRoute from './PetType.routes';
import { Express } from "express";
import PATH from "../Constant/url";

export default (app: Express) => {
    app.use(PATH.PRODUCT.baseURL, ProductRoute);
    app.use(PATH.CATEGORY.baseURL, CateRoute);
    app.use(PATH.AUTH.baseURL, AuthRoute);
    app.use(PATH.SOCIAL_MEDIA.baseURL, SocialMediaRoute);
    app.use(PATH.BILL.baseURL, BillRoute);
    app.use(PATH.CATEGORY_DETAIL.baseURL, CategoryDetailRoute);
    app.use(PATH.PET_TYPE.baseURL, PetTypeRoute);
};
