import logger from '../../../../Config/logger';
import CategoryRequest from '../../../../Mapping/Request/CategoryRequest';
import FurnitureProductRequest from "./product";
import { v4 } from 'uuid';
import mongoose from 'mongoose';

class FurnitureRequest extends CategoryRequest {
    private code: any;
    private image: any;
    private childCate: any;
    private products: any;
    private _id: Object;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this._id = new mongoose.Types.ObjectId();
        this.code = data?.code || "";
        this.products = this.generateCategoryProducts(data, []) || [];
        this.childCate = (data?.childCate || []).map(item => new FurnitureRequest(item)) || [];
        this.image = data?.image || "";
    }

    public generateLeafCategoryProducts(products, arr) {
        let isLeaf = !!products;
        if(isLeaf) {
            products.length > 0 && products.map(id => arr.push({_id: id}));
        }
    }

    public generateCategoryProducts(category, arr = []) {
        if(category.childCate) {
            category.childCate.map(item => {
                this.generateCategoryProducts(item, arr)
            })
        } else if(category.products) {
            this.generateLeafCategoryProducts(category.products, arr);
        }
        return arr;
    }
}

export default FurnitureRequest;
