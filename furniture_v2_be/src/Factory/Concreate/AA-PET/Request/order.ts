import OrderRequest from "../../../../Mapping/Request/OrderRequest";

interface ProductType {
    product_id: string;
    count: number;
}

export default class AAPetRequest extends OrderRequest {
    private user: {};
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
        this.user = data.user || {};
        this.products = data.products || [];
        this.delivery_method = data.delivery_method || "";
        this.payment_method = data.payment_method || "";
    }
}
