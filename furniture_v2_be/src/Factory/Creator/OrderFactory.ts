//AA-Pet
import AAPetRequest from "../Concreate/AA-PET/Request/order";
import AAPetResponse from "../Concreate/AA-PET/Response/order";
import AAPetSchema from '../../models/Order/aa-pet';
import TAG_DEFINE from "../../Constant/define";

export default class OrderFactory{
    public static createOrder(data: any, type: string){
        switch (type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);

            default:
                return new AAPetRequest(data);
        }
    }

    public static getOrder(data: any, type: string){
        switch (type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetResponse(data);

            default:
                return new AAPetResponse(data);
        }
    }
    
    public static createSchema(data: any, type: string){
        switch (type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetSchema(data);
    
            default:
                return new AAPetSchema(data);
        }
        
    }

    public static getSchema(type: string){
        switch (type){
            case TAG_DEFINE.STORE.AA_PET:
                return AAPetSchema;
    
            default:
                return AAPetSchema;
        }
        
    }
}