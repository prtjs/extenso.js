"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const write_int_1 = __importDefault(require("../write-int"));
exports.default = (val, locale, opts, scale) => {
    const number = parseInt(val);
    const text = (0, write_int_1.default)(val, locale, 'm', scale);
    if (number === 1)
        return `${text} ${opts.singular}`;
    if (number >= 1e+6) {
        const numStr = number.toString();
        const hundreds = parseInt(numStr.substr(-6, 3));
        const dozens = parseInt(numStr.substr(-3, 3));
        if (hundreds === 0 && dozens === 0) {
            return `${text} de ${opts.plural}`;
        }
    }
    return `${text} ${opts.plural}`;
};
