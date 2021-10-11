import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class BillResponse implements generateData {
    private _id: any;
    private total: any
    private created_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data?._id.toString() || "";
        this.total = data?.total || "";
        this.created_at = data?.created_at || Date.now();
    }
}
