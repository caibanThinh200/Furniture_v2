import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import {ProductBaseField} from './baseField'

export const ProductField = {
    ...ProductBaseField,
    category_detail_id: {
        type: String,
        required: true,
        ref: CommonFunction.getStoreSchema(
            TAG_DEFINE.SCHEMA.CATEGORY_DETAIL,
            TAG_DEFINE.STORE.AA_PET
        ),
    },
    img: {
        type: Array,
        default: [],
    },
    rating_point: {
        type: Number,
        default: 0,
    },
    reviews: {
        type: Array,
        default: [],
    },
    pet_type_id: [
        {
            type: String,
            ref: CommonFunction.getStoreSchema(
                TAG_DEFINE.SCHEMA.PET_TYPE,
                TAG_DEFINE.STORE.AA_PET
            ),
            required: true,
        },
    ],
};

const ProductSchema = new mongoose.Schema(ProductField);

const Product = mongoose.model(
    CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET),
    ProductSchema
);

export default Product;
