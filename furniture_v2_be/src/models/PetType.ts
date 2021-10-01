import mongoose from "mongoose";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";

const PetTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const PetType = mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.PET_TYPE,
        TAG_DEFINE.STORE.AA_PET
    ),
    PetTypeSchema
);

export default PetType;
