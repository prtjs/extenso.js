"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const write_int_1 = __importDefault(require("../write-int"));
exports.default = (val, locale, opts) => {
    const textNumber = (0, write_int_1.default)(val, locale);
    return parseInt(val) === 1
        ? `${textNumber} ${opts.subunit.singular}`
        : `${textNumber} ${opts.subunit.plural}`;
};
