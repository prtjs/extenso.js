"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lt10_1 = __importDefault(require("./lt10"));
const get_list_1 = require("./get-list");
exports.default = (int, locale) => {
    if (int < 10)
        return (0, lt10_1.default)(int);
    if (int < 20)
        return (0, get_list_1.listLt100)(locale)[int - 10];
    const unit = (0, lt10_1.default)(int % 10);
    const ten = (0, get_list_1.listLt100)(locale)[(int - int % 10) / 10 + 8];
    return unit !== 'zero'
        ? `${ten} e ${unit}`
        : ten;
};
