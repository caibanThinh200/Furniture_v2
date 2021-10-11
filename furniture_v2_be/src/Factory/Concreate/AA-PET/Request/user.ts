import { UserModel } from "../../../../Mapping/Request/UserRequest";

export default class AAPetModel extends UserModel {
    private username: any;
    
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.username = data?.username || "";
    }
}
