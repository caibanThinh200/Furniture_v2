import { generateData } from "../../Factory/interface";

export default abstract class CategoryDetailResponse implements generateData {
    private name: any;
    private category_id: any;
    private createdAt: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data?.name;
        this.category_id = data?.category_id;
        this.createdAt = Date.now();
    }
}
