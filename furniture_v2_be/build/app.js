"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const function_1 = __importDefault(require("./Utils/function"));
const logger_1 = __importDefault(require("./config/logger"));
const define_1 = __importDefault(require("./Constant/define"));
const mongodb_1 = __importDefault(require("./config/mongodb"));
const url_1 = __importDefault(require("./Constant/url"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_routes_1 = __importDefault(require("./Routes/index.routes"));
const app = (0, express_1.default)();
mongodb_1.default.getInstance();
app.use(body_parser_1.default.raw());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
(0, index_routes_1.default)(app);
app.get(url_1.default.APP.start, (req, res) => {
    res.send(define_1.default.SERVICE.start);
});
app.get(url_1.default.APP[404], (req, res) => {
    res.send(define_1.default.CODE[404].replace("%s", function_1.default.capitalizeFirstLetter("API")));
});
const PORT = typeof (process.env.PORT_SERVER) !== "number" ? function_1.default.formatInt(process.env.PORT_SERVER) : process.env.PORT_SERVER;
const server = (0, http_1.createServer)(app);
server.listen(PORT, () => logger_1.default.info(define_1.default.SERVER.start.replace("%s", PORT.toString())));
exports.default = app;