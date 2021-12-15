import AAPetAccessoryModel from "./../../../../models/Accessory/aa-pet";
import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../Config/logger";
import CommonFunction from "../../../../Utils/function";
import TAG_DEFINE from "../../../../Constant/define";
import AAPetProductTypeModel from "../../../../models/ProductType/aa-pet";
class AAPetModel extends ProductRequest {
    private category_detail_id: string;
    // private accessories: any;
    private size: any;
    private weight: any;
    private origin: any;
    private feather: any;
    private capacity: any;
    private net_weight: any;
    private images: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    async setFurnitureData(data: any) {
        this.setData(data);
        this.category_detail_id = data?.category_detail_id || "";
        this.images = data?.images || [];
        this.size = data?.size;
        this.weight = data?.weight;
        this.origin = data?.origin;
        this.feather = data?.feather;
        this.capacity = data?.capacity;
        this.net_weight = data?.net_weight;

        // const generateAccessories = await this.generateAccessories(data);

        // const accessories = generateAccessories.map((item) => {
        //     return item.then((res) => res[0]);
        // });

        // console.log({accessories})

        // this.accessories = accessories;
    }

    // async generateAccessories(data: any) {
    //     const product_types = await AAPetProductTypeModel.find().populate(
    //         "attributes"
    //     );

    //     const accessories = product_types[data.type - 1].attributes.map(
    //         async (item) => {
    //             const result = [];
    //             const accessory = await AAPetAccessoryModel.findById(item._id);

    //             switch (accessory.name) {
    //                 case TAG_DEFINE.ACCESSORIES.AA_PET.SIZE.name:
    //                     switch (data.size) {
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.SIZE.S:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 1,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.SIZE.M:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 2,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.SIZE.L:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 3,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.SIZE.XL:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 4,
    //                             });
    //                             break;
    //                     }
    //                     break;
    //                 case TAG_DEFINE.ACCESSORIES.AA_PET.WEIGHT.name:
    //                     if (data.weight <= 1) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 0 + 1,
    //                         });
    //                     } else if (data.weight > 1 && data.weight <= 3) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 1 + 1,
    //                         });
    //                     } else if (data.weight > 3 && data.weight <= 5) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 2 + 1,
    //                         });
    //                     } else if (data.weight > 5 && data.weight <= 7) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 3 + 1,
    //                         });
    //                     }
    //                     break;
    //                 case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.name:
    //                     switch (data.origin) {
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.type_1:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 0 + 1,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.type_2:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 1 + 1,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.type_3:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 2 + 1,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.type_4:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 3 + 1,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.type_5:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 4 + 1,
    //                             });
    //                             break;
    //                         case TAG_DEFINE.ACCESSORIES.AA_PET.ORIGIN.type_6:
    //                             result.push({
    //                                 _id: accessory._id,
    //                                 type: 5 + 1,
    //                             });
    //                             break;
    //                     }
    //                     break;
    //                 case TAG_DEFINE.ACCESSORIES.AA_PET.FEATHER.name:
    //                     if (data.feather === 0) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 0 + 1,
    //                         });
    //                     } else if (data.feather < 1) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 1 + 1,
    //                         });
    //                     } else if (data.feather === 1) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 2 + 1,
    //                         });
    //                     } else if (data.feather > 1) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 3 + 1,
    //                         });
    //                     }
    //                     break;
    //                 case TAG_DEFINE.ACCESSORIES.AA_PET.CAPACITY.name:
    //                     if (data.capacity <= 30) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 0 + 1,
    //                         });
    //                     } else if (data.capacity > 30 && data.capacity <= 75) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 1 + 1,
    //                         });
    //                     } else if (data.capacity > 75 && data.capacity <= 120) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 2 + 1,
    //                         });
    //                     } else if (
    //                         data.capacity > 120 &&
    //                         data.capacity <= 200
    //                     ) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 3 + 1,
    //                         });
    //                     } else if (
    //                         data.capacity > 200 &&
    //                         data.capacity <= 300
    //                     ) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 4 + 1,
    //                         });
    //                     } else if (data.capacity > 300) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 5 + 1,
    //                         });
    //                     }
    //                     break;
    //                 case TAG_DEFINE.ACCESSORIES.AA_PET.NET_WEIGHT.name:
    //                     if (data.net_weight <= 15) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 0 + 1,
    //                         });
    //                     } else if (
    //                         data.net_weight > 15 &&
    //                         data.net_weight <= 50
    //                     ) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 1 + 1,
    //                         });
    //                     } else if (
    //                         data.net_weight > 50 &&
    //                         data.net_weight <= 100
    //                     ) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 2 + 1,
    //                         });
    //                     } else if (
    //                         data.net_weight > 100 &&
    //                         data.net_weight <= 300
    //                     ) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 3 + 1,
    //                         });
    //                     } else if (
    //                         data.net_weight > 300 &&
    //                         data.net_weight <= 500
    //                     ) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 4 + 1,
    //                         });
    //                     } else if (data.net_weight > 500) {
    //                         result.push({
    //                             _id: accessory._id,
    //                             type: 5 + 1,
    //                         });
    //                     }

    //                     break;
    //             }

    //             return result;
    //         }
    //     );

    //     // accessories[0].then(res => console.log({accessory: res}))

    //     return accessories;
    // }
}

export default AAPetModel;
