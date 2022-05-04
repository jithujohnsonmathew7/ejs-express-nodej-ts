"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const __1 = __importDefault(require(".."));
const contact_1 = __importDefault(require("../contact"));
const about_1 = __importDefault(require("../about"));
const error_1 = __importDefault(require("../error"));
// export default class Routes{
const register = (app) => {
    app.get("/", __1.default.Index);
    app.get("/about", about_1.default.About);
    app.get("/contact", contact_1.default.Contact);
    app.get("/401", error_1.default.Index);
};
exports.register = register;
// }
