"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
const product_1 = __importDefault(require("./Concreate/Request/Furniture/product"));
const product_2 = __importDefault(require("./Concreate/Response/Furniture/product"));
class ProductFactory {
    static createProduct(data, type) {
        switch (type) {
            case "furniture": return new product_1.default(data);
            default: return new product_1.default(data);
        }
    }
    static getProduct(data, type) {
        switch (type) {
            case "furniture": return new product_2.default(data);
            default: return new product_2.default(data);
        }
    }
}
exports.ProductFactory = ProductFactory;