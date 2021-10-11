import {BillResponse} from '../../../../Mapping/Response/BillResponse';

export default class AAPetResponse extends BillResponse {
    private user_id: any;
    private products: any;

    constructor(data: any){
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any){
        this.setData(data);
        this.user_id = data?.user_id;
        this.products = data?.products;
    }
}