export default class CategoryResponse {
    private type: string;
    private id: string;
    private key: string;
    private title: string;
    private select: Object[]


    constructor(data: any) {
        this.setData(data);
    }

    public setData(data: any): void {
        this.id = data._id || "";
        this.key = data._id || "";
        this.type = data.code || "";
        this.title = data.name || "";
        this.select = data.childCate.length > 0 ? data.childCate.map((item: any) => new CategoryResponse(item)) : []
    }
}