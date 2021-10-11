import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class SocialMediaResponse implements generateData {
    private _id: any;
    private name: any;
    private code: any;
    private thumb: any;
    private created_at: any;
    private updated_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data?._id || "";
        this.name = data?.name || "";
        this.code = data?.code || "";
        this.thumb = data?.thumb || "";
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
    }
}
