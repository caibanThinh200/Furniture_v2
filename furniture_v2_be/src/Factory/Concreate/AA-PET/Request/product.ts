import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../Config/logger";
class AAPetModel extends ProductRequest {
    private category_detail_id: string;
    private img: any;
    private rating_point: number;
    private reviews: any;
    private pet_type_id: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
<<<<<<< HEAD
        this.category_detail_id = data.category_detail_id || "";
        this.img = data.img
        this.rating_point = data.rating_point || 0;
        this.reviews = data.reviews || [];
        this.pet_type_id = data.pet_type_id || [];
=======
        this.category_detail_id = data?.category_detail_id || "";
>>>>>>> master
    }
}

export default AAPetModel;
