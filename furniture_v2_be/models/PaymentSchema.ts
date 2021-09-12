const TAG_DEFINE = require("../Constant/define");

const mongoose = require("mongoose"),
{Schema} = mongoose;

const payments = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: TAG_DEFINE.SERVICE.PAYMENT.cash
    },
    code: {
        type: String,
        default: TAG_DEFINE.CODE.PAYMENT.cash
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
})

const PaymentSchema = mongoose.model(TAG_DEFINE.SCHEMA.PAYMENT, payments)
export default PaymentSchema;

