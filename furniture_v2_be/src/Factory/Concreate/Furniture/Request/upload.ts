import logger from '../../../../Config/logger';
import { UploadRequest } from '../../../../Mapping/Request/UploadRequest';
class FurnitureRequest extends UploadRequest {
    private code: any;
    private image: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data?.code || "";
        this.image = data?.image || "";
    }
}

export default FurnitureRequest;