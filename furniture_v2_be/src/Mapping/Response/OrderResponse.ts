import { generateData } from "../../Factory/interface";

export default class OrderResponse implements generateData {
    private totalPrice: number;
    private createdAt: Date;
    private status: string;
    private _id: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data._id.toString() || "";
        this.totalPrice = data.totalPrice || 0;
        this.createdAt = data.createdAt || Date.now();
        this.status = data.status || "pending";
    }
}
