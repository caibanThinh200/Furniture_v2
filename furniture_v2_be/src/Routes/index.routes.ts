import ProductRoute from './Product.routes';
import AuthRoute from './Auth.routes';
import CategoryRoute from './Category.routes'
import {Express} from 'express';
import PATH from '../Constant/url'

export default (app: Express) => {
    app.use(PATH.PRODUCT.baseURL, ProductRoute);
    app.use(PATH.AUTH.baseURL, AuthRoute);
    app.use(PATH.CATEGORY.baseURL, CategoryRoute);
};