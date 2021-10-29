import * as BaseField from './baseField';
import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import CommonFunction from '../../Utils/function';
import TAG_DEFINE from '../../Constant/define';

const FurnitureFields = {
    ...BaseField
}

export const FurnitureAcessorySchema = new Schema(FurnitureFields);
export default mongoose.model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.ACCESSORY, TAG_DEFINE.STORE.FURNITURE), FurnitureAcessorySchema);