import OrderRequest from "../../../../Mapping/Request/OrderRequest";

interface ProductType {
    product_id: string;
    count: number;
}

export default class AAPetRequest extends OrderRequest {
    private delivery_info: {};
    private user_id: string;
    private products: ProductType[];
    private delivery_method: string;
    private payment_method: string;

    /**
     *
     */
    constructor(data: any) {
        super(data);
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
        this.delivery_info = data.delivery_info || {};
        this.user_id = data.user_id || {};
        this.products = data.products || [];
        this.delivery_method = data.delivery_method || "";
        this.payment_method = data.payment_method || "";
    }
}
