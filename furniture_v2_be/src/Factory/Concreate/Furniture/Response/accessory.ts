import logger from '../../../../Config/logger';
import { AccessoryResponse } from '../../../../Mapping/Response/AccessoryResponse';
class FurnitureResponse extends AccessoryResponse {
    private color: any;
    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.color = data?.color || [];
    }
}

export default FurnitureResponse;