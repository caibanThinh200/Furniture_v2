import { generateData } from "../../Factory/interface";
import TAG_DEFINE from "../../Constant/define";
import { v4 } from "uuid";

export default abstract class CategoryRequest implements generateData {
    private name: any;
    private created_at: any;
    private updated_at: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data?.name || "";
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
    }
}
