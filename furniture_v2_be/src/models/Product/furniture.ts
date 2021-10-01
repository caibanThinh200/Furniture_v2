import { CategorySchema } from "../Categories/furniture";
import ImageModel, { ImageSchema } from "../Upload/furniture";
import { ProductBaseField } from "./baseField";
import { Schema, model } from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";

const FurnitureFields = {
    ...ProductBaseField,
    size: {
        type: String,
        require: true,
    },
    productWeight: {
        type: Number,
        require: true,
    },
    maxWeight: {
        type: Number,
        require: true,
    },
    feature: {
        type: String,
    },

    madeIn: {
        type: String,
        require: true,
    },

    status: {
        type: String,
        default: 0,
    },
    // images: {
    //     type: [ImageSchema]
    // },
    // categories: {
    //     type: [CategorySchema]
    // }
};

export const FurnitureProductSchema = new Schema(FurnitureFields);
const FurnitureModel = model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.PRODUCT,
        TAG_DEFINE.STORE.FURNITURE
    ),
    FurnitureProductSchema
);

export default FurnitureModel;
