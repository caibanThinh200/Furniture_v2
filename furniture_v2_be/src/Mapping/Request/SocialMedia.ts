import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class SocialMediaRequest implements generateData {
    private name: any;
    private code: any;
    private thumb: any
    private created_at: any;
    private updated_at: any
//
    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data?.name || "";
        this.code = data?.code || "";
        this.thumb = data?.thumb || "";
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
    }
}
