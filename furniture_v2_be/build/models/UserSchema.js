"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentSchema_1 = __importDefault(require("./PaymentSchema"));
const VoucherSchema_1 = __importDefault(require("./VoucherSchema"));
const define_1 = __importDefault(require("../Constant/define"));
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const User = new Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    social: {
        type: String,
        default: define_1.default.SERVICE.SOCIAL.web
    },
    point: {
        type: Number,
        default: 0
    },
    vouchers: {
        type: [VoucherSchema_1.default],
        default: []
    },
    paymentList: {
        type: [PaymentSchema_1.default],
        default: []
    },
    bills: {}
});
const UserSchema = mongoose_1.default.model(define_1.default.SCHEMA.USER, User);
exports.default = UserSchema;