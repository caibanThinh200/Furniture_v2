import { model, Schema, Types } from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import { ProductTypeBaseField } from "./basefield";
import { AddTypeInAccessory } from "../../Middleware/productType.middleware";

const AAPetBaseField = {
    ...ProductTypeBaseField,
    attributes: {
        type: [Schema.Types.ObjectId],
        ref: CommonFunction.getStoreSchema(
            TAG_DEFINE.SCHEMA.ACCESSORY,
            TAG_DEFINE.STORE.AA_PET
        ),
    },
    type: {
        type: Number,
        required: true,
        unique: true,
    },
};

export const AAPetProductTypeSchema = new Schema(AAPetBaseField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

AAPetProductTypeSchema.post("save", (doc) =>
    AddTypeInAccessory(doc, TAG_DEFINE.STORE.AA_PET)
);

const AAPetProductTypeModel = model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.PRODUCT_TYPE,
        TAG_DEFINE.STORE.AA_PET
    ),
    AAPetProductTypeSchema
);
export default AAPetProductTypeModel;
