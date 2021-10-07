import OrderResponse from "../../../../Mapping/Response/OrderResponse";

interface ProductType {
    product_id: string;
    count: number;
}

export default class AAPetResponse extends OrderResponse {
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
