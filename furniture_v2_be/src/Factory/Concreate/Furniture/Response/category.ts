import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../Config/logger';
import FurnitureProductResponse from "./product";

class FurnitureResponse extends CategoryResponse {
    private code: any;
    private image: any;
    private childCate: any;
    private products: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data?.code || "";
        this.products = this.generateCategoryProducts(data, [])
        this.childCate = (data?.childCate || []).length > 0 ? data?.childCate.map(item => new FurnitureResponse(item)) : [];
        this.image = data?.image || "";
    }
    
    public generateLeafCategoryProducts(products, arr) {
        let isLeaf = !!products;
        if(isLeaf) {
             products.length > 0 && products.map(item => arr.push(item));
        }
    }

    public generateCategoryProducts(category, arr = []) {
        if(category.childCate.length > 0) {
            category.childCate.map(item => {
                this.generateCategoryProducts(item, arr)
            })
        } else if(category.products) {
            this.generateLeafCategoryProducts(category.products, arr);
        }
        return arr;
    }
}

export default FurnitureResponse;