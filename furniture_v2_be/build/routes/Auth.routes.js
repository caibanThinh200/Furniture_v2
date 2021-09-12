"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_controller_1 = __importDefault(require("../controllers/Auth.controller"));
const router = express_1.default.Router();
router.post('/login', Auth_controller_1.default.Login);
router.post('/register', Auth_controller_1.default.Register);
exports.default = router;
