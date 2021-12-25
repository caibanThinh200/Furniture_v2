import logger from '../../../../Config/logger';
import { UploadResponse } from '../../../../Mapping/Response/UploadResponse';
class FurnitureResponse extends UploadResponse {
    private code: string;
    private image: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureResponse;