"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNegative = exports.isValidOpt = void 0;
const num_util_1 = require("./num-util");
const index_1 = __importDefault(require("./write-currency/index"));
const index_2 = __importDefault(require("./write-decimal/index"));
const write_int_1 = __importDefault(require("./write-int"));
const isValidOpt = (val, vals) => {
    return vals.includes(val || '');
};
exports.isValidOpt = isValidOpt;
const toNegative = (num, mode = 'formal') => {
    return mode === 'informal'
        ? `menos ${num}`
        : `${num} negativo`;
};
exports.toNegative = toNegative;
exports.default = (num, opts) => {
    if (typeof num === 'bigint') {
        num = num.toString();
    }
    if (typeof num !== 'string' && typeof num !== 'number') {
        throw new TypeError('Must be a string, number or bigint');
    }
    opts = opts || {};
    opts.mode = opts.mode || 'number';
    opts.locale = opts.locale || 'br';
    opts.negative = opts.negative || 'formal';
    opts.scale = opts.scale || 'short';
    opts.currency = opts.currency || {};
    opts.currency.type = opts.currency.type || 'BRL';
    opts.number = opts.number || {};
    opts.number.gender = opts.number.gender || 'm';
    opts.number.decimal = opts.number.decimal || 'formal';
    opts.number.decimalSeparator = opts.number.decimalSeparator || 'comma';
    if (!(0, exports.isValidOpt)(opts.mode, ['number', 'currency']) ||
        !(0, exports.isValidOpt)(opts.locale, ['pt', 'br']) ||
        !(0, exports.isValidOpt)(opts.negative, ['formal', 'informal']) ||
        !(0, exports.isValidOpt)(opts.scale, ['short', 'long']) ||
        !(0, exports.isValidOpt)(opts.currency.type, ['BRL', 'EUR', 'CVE']) ||
        !(0, exports.isValidOpt)(opts.number.gender, ['m', 'f']) ||
        !(0, exports.isValidOpt)(opts.number.decimal, ['formal', 'informal']) ||
        !(0, exports.isValidOpt)(opts.number.decimalSeparator, ['comma', 'dot'])) {
        throw new Error('Invalid option');
    }
    const decimalSeparatorIsDot = opts.number.decimalSeparator === 'dot' || typeof num === 'number';
    if (!(0, num_util_1.isValidNumber)(num, decimalSeparatorIsDot)) {
        throw new Error('Invalid number');
    }
    const { isNegative, integer, decimal } = (0, num_util_1.parseNumber)(num, decimalSeparatorIsDot);
    if (opts.mode === 'currency') {
        const iso = opts.currency.type;
        const locale = opts.locale;
        const decimalCents = decimal.slice(0, 2);
        const numText = (0, index_1.default)(iso || '', locale, integer, decimalCents, opts.scale);
        return isNegative
            ? (0, exports.toNegative)(numText, opts.negative)
            : numText;
    }
    if (opts.mode === 'number') {
        const intNameSingular = opts.number.gender === 'f' ? 'inteira' : 'inteiro';
        const intName = parseInt(integer) === 1 ? intNameSingular : `${intNameSingular}s`;
        const intText = (0, write_int_1.default)(integer, opts.locale, opts.number.gender, opts.scale);
        const decText = (0, index_2.default)(decimal, opts.locale, opts.number.decimal);
        if (integer === '0' && decimal === '0') {
            return intText;
        }
        // Se tem a parte inteira e não tem a parte decimal
        if (integer !== '0' && decimal === '0') {
            return isNegative
                ? (0, exports.toNegative)(intText, opts.negative)
                : intText;
        }
        // Se não tem a parte inteira e tem a parte decimal
        if (integer === '0' && decimal !== '0') {
            const number = opts.number.decimal === 'informal'
                ? `zero ${decText}`
                : decText;
            return isNegative
                ? (0, exports.toNegative)(number, opts.negative)
                : number;
        }
        // Se tem a parte inteira e a parte decimal
        if (integer !== '0' && decimal !== '0') {
            if (opts.number.decimal === 'informal') {
                return `${intText} ${decText}`;
            }
            const numText = `${intText} ${intName} e ${decText}`;
            return isNegative
                ? (0, exports.toNegative)(numText, opts.negative)
                : numText;
        }
    }
};
