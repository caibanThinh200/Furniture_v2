import { generateData } from "../../Factory/interface";
import logger from "../../Config/logger";
import TAG_DEFINE from '../../Constant/define';

export default abstract class ProductResponse implements generateData {
    private _id: any;
    private name: any;
    private description: any;
    private quantity: any;
    private saled_count: any;
    private discount_percent: any;
    private price: any;
    private status: any;
    private type: any;
    private madeIn: any;
    private created_at: any;
    private updated_at: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data?._id.toString() || "";
        this.name = data?.name || "";
        this.description = data?.description || "";
        this.quantity = data?.quantity || 0;
        this.saled_count = data?.saled_count || 0;
        this.discount_percent = data?.discount_percent || 0;
        this.price = data?.price || 0;
        this.status = data?.status || 0;
        this.created_at = data?.created_at || new Date();
        this.updated_at = data?.updated_at || null;
    }
}