import ProductModel from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../Config/logger";
class AAPetModel extends ProductModel {
    private category_detail_id: string;
    private images: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.category_detail_id = data?.category_detail_id || "";
        this.images = data?.images || []
    }
}

export default AAPetModel;
