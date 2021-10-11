import ProductResponse from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../Config/logger";
import FurnitureUploadResponse from "./upload";
import { UploadResponse } from '../../../../Mapping/Response/UploadResponse';

class FurnitureResponse extends ProductResponse {
    private size: any;
    private productWeight: any;
    private maxWeight: any;
    private feature: any;
    private images: any;
    private categories: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.size = data?.size || "";
        this.productWeight = data?.productWeight || "";
        this.maxWeight = data?.maxWeight || "";
        this.feature = data?.feature || "";
        this.images = (data?.images || []).map(item => new FurnitureUploadResponse(item));
        this.categories = data?.categories || "";
    }
}

export default FurnitureResponse;
