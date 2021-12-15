import TAG_DEFINE from "../../Constant/define";
import FurnitureTypeProductRequest from "../Concreate/Furniture/Request/productType";
import FurnitureTypeProductResponse from "../Concreate/Furniture/Response/productType";
import FurnitureProductTypeModel, {
    FurnitureProductTypeSchema,
} from "../../models/ProductType/furniture";

//AA-pet
import AAPetRequest from "../Concreate/AA-PET/Request/productType";
import AAPetResponse from "../Concreate/AA-PET/Response/productType";
import AAPetModel from "../../models/ProductType/aa-pet";
export class ProductTypeFactory {
    public static createProductType(data, type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureTypeProductRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default:
                return new FurnitureTypeProductRequest(data);
        }
    }

    public static getProductType(data, type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureTypeProductResponse(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetResponse(data);
            default:
                return new FurnitureTypeProductResponse(data);
        }
    }

    public static createSchema(data, type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureProductTypeModel(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetModel(data);
            default:
                return new FurnitureProductTypeModel(data);
        }
    }

    public static getSchema(type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return FurnitureProductTypeModel;
            case TAG_DEFINE.STORE.AA_PET:
                return AAPetModel;
            default:
                return FurnitureProductTypeModel;
        }
    }
}
