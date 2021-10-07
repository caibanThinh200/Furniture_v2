import { generateData } from "../../Factory/interface";

export default class OrderRequest implements generateData {
    private totalPrice: number;
    private createdAt: Date;
    private status: string;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.totalPrice = data.totalPrice || 0;
        this.createdAt = data.createdAt || Date.now();
        this.status = data.status || "pending";
    }
}
