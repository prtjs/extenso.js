"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDecimalInformal = exports.writeDecimalFormal = exports.pluralize = void 0;
const write_int_1 = __importDefault(require("../write-int"));
const get_list_1 = require("../get-list");
const util_1 = require("./util");
const pluralize = (val, count) => {
    return count > 1
        ? `${val}s`
        : val;
};
exports.pluralize = pluralize;
const writeDecimalFormal = (int, locale) => {
    // REF: https://web.archive.org/web/20180908114842/https:/www.professornews.com.br/dicas-de-redacao/5620-como-escrever-numeros-decimais-por-extenso.html
    const len = int.length;
    const intNum = parseInt(int);
    const intNormalized = int.replace(/^0+/, '');
    const intText = (0, write_int_1.default)(intNormalized, locale);
    const intType = (0, exports.pluralize)((0, util_1.getType)(len), intNum);
    const intTypeOf = (0, get_list_1.listDecimals)()[Math.floor(len / 3 - 1)];
    if (len < 3)
        return `${intText} ${intType}`;
    if (len % 3 === 0)
        return `${intText} ${(0, exports.pluralize)(intTypeOf, intNum)}`;
    return `${intText} ${intType} de ${intTypeOf}`;
};
exports.writeDecimalFormal = writeDecimalFormal;
const writeDecimalInformal = (int, locale) => {
    return `vírgula ${(0, write_int_1.default)(int, locale)}`;
};
exports.writeDecimalInformal = writeDecimalInformal;
exports.default = (int, locale, opt) => {
    return opt && opt === 'informal'
        ? (0, exports.writeDecimalInformal)(int, locale)
        : (0, exports.writeDecimalFormal)(int, locale);
};
