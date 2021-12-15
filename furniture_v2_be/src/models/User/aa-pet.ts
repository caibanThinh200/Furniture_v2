import mongoose, { Schema, model } from "mongoose";
import BaseField from "./BaseField";
import CommonFunction from "../../Utils/function";
import TAG_DEFINE from "../../Constant/define";
import bcrypt from "bcrypt";

interface UserDocument extends mongoose.Document {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    gender: number;
}

const UserSchema = new Schema(
    {
        ...BaseField,
        username: {
            type: String,
            required: true,
            unique: true,
        },
        wishList: {
            type: Array,
            default: []
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

UserSchema.pre("save", async function (next) {
    const user = this as UserDocument;
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    return next();
});

const UserModel = model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.USER,
        TAG_DEFINE.STORE.AA_PET
    ),
    UserSchema
);

export default UserModel;
