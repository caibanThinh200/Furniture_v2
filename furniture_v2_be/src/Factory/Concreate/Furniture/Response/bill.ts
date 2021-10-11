import logger from '../../../../Config/logger';
import { BillResponse } from '../../../../Mapping/Response/BillResponse';
import { FurnitureUserResponse, FurnitureProductResponse } from './index';
class FurnitureResponse extends BillResponse {
    private user: any;
    private products: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.user = new FurnitureUserResponse(data?.user) || {}
        this.products = (data?.products || []).map(item => new FurnitureProductResponse(item)) || [];
    }
}

export default FurnitureResponse;