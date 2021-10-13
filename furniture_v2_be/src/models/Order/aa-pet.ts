import { Schema, model } from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import baseField from "./baseField";
import shortId from "shortid";

const productField = {
    _id: false,
    product_id: {
        type: String,
        ref: CommonFunction.getStoreSchema(
            TAG_DEFINE.SCHEMA.PRODUCT,
            TAG_DEFINE.STORE.AA_PET
        ),
        required: true,
    },
    count: {
        type: Number,
        default: 1,
    },
};

const deliveryField = {
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
    },
};

const OrderSchema = new Schema({
    ...baseField,
    delivery_info: deliveryField,
    products: [productField],
    payment_method: {
        type: String,
        required: true,
    },
    delivery_method: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        ref: CommonFunction.getStoreSchema(
            TAG_DEFINE.SCHEMA.ORDER,
            TAG_DEFINE.STORE.AA_PET
        ),
        required: true,
    },
    code: {
        type: String,
        unique: true
    },
});

var autoPopulateLead = function (next) {
    this.populate({
        path: "products",
        populate: {
            path: "product_id",
        },
    });
    // .populate("pet_type_id");

    next();
};

OrderSchema.pre('save', function(next){
    this.code = shortId
        .characters(
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
        )
        .slice(0, 6)
        .toUpperCase();

    next();
})

OrderSchema.pre("find", autoPopulateLead);

const Order = model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.ORDER,
        TAG_DEFINE.STORE.AA_PET
    ),
    OrderSchema
);

export default Order;
