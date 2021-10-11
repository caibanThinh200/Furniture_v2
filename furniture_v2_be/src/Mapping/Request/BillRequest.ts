import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export default abstract class BillRequest implements generateData {
    private total: any
    private created_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.total = (data?.products || []).reduce((i, k) => i + k.price, 0) || 0;
        this.created_at = data?.created_at || Date.now();
    }
}
