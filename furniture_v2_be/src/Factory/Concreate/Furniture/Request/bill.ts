import logger from "../../../../Config/logger";
import BillRequest from "../../../../Mapping/Request/BillRequest";
import FurnitureUserRequest from "./user";
import FurnitureProductRequest from "./product";
class FurnitureRequest extends BillRequest {
    private user: any;
    private products: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.user = new FurnitureUserRequest(data?.user || {}) || "";
        this.products = data?.products.map((item) => new FurnitureProductRequest(item)) || [];
    }
}

export default FurnitureRequest;
