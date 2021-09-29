import logger from '../../../../config/logger';
import { SocialMediaResponse } from '../../../../Mapping/Response/SocialMedia';
class FurnitureResponse extends SocialMediaResponse{

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureResponse;