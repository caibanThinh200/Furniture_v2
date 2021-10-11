import { generateData } from "../../Factory/interface";

export abstract class UserModel implements generateData {
    private _id: any;
    private name: string;
    private email: string;
    private password: string;
    private address: string;
    private phone: string;
    private gender: string;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data?._id || "";
        this.name = data?.name || "";
        this.email = data?.email || "";
        this.password = data?.password || "";
        this.address = data?.address || "";
        this.phone = data?.phone || "";
        this.gender = data?.gender || "Male";
    }
}
