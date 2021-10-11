import logger from '../../../../Config/logger';
import { AccessoryRequest } from '../../../../Mapping/Request/AcessoryRequest';
class FurnitureRequest extends AccessoryRequest {
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

export default FurnitureRequest;