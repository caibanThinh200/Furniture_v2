import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../Config/logger';
class AAStoreResponse extends CategoryResponse {
    private childCate: any;

    constructor(data: any) {
        super(data)
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
        
        this.childCate =
            (data?.childCate || []).length > 0
                ? data?.childCate.map((item) => new AAStoreResponse(item))
                : [];
    }
}

export default AAStoreResponse;