"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFemale = void 0;
const lt1000_1 = __importDefault(require("./lt1000"));
const index_1 = __importDefault(require("./gt1000/index"));
const toFemale = (num) => {
    return num
        .replace(/\bum\b/, 'uma')
        .replace(/\bdois\b/, 'duas');
};
exports.toFemale = toFemale;
exports.default = (int, locale, gender = 'm', scale = 'short') => {
    const intNum = parseInt(int);
    let num = '';
    if (intNum < 1000)
        num = (0, lt1000_1.default)(intNum, locale);
    if (intNum === 1000)
        num = 'mil';
    if (intNum > 1000)
        num = (0, index_1.default)(int, locale, scale);
    return gender === 'f'
        ? (0, exports.toFemale)(num)
        : num;
};
