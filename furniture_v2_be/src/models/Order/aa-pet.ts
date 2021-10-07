import {Schema, model} from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import CommonFunction from '../../Utils/function';
import baseField from './baseField';

const productField = {
    _id: false,
    product_id: {
        type: String,
        ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET),
        required: true
    },
    count: {
        type: String,
        default: 1,
    }
}

const userField = {
    _id: false,
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: { 
        type: String,
        required: true,
    }
}

const OrderSchema = new Schema({
    ...baseField,
    user: userField,
    products: [productField],
    payment_method: {
        type: String,
        required: true,
    },
    delivery_method: {
        type: String,
        required: true,
    }
});

const Order = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.ORDER, TAG_DEFINE.STORE.AA_PET), OrderSchema);

export default Order;