"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isZero = exports.isValidIso = exports.getIsos = void 0;
const currencies_1 = __importDefault(require("./currencies"));
const write_1 = __importDefault(require("./write"));
const write_subunit_1 = __importDefault(require("./write-subunit"));
const getIsos = (currencies) => {
    return Object.keys(currencies);
};
exports.getIsos = getIsos;
const isValidIso = (iso, currencies) => {
    return (0, exports.getIsos)(currencies).includes(iso);
};
exports.isValidIso = isValidIso;
const isZero = (val) => {
    return /^0+$/.test(val);
};
exports.isZero = isZero;
exports.default = (iso, locale, unit = '0', subunit = '0', scale) => {
    if (!(0, exports.isValidIso)(iso, currencies_1.default)) {
        throw new Error('Invalid ISO code');
    }
    if (subunit.length === 1) {
        subunit = subunit + '0';
    }
    const opts = currencies_1.default[iso];
    const unitText = (0, write_1.default)(unit, locale, opts, scale);
    const subunitText = (0, write_subunit_1.default)(subunit, locale, opts);
    if ((0, exports.isZero)(unit) && (0, exports.isZero)(subunit))
        return `zero ${opts.plural}`;
    if ((0, exports.isZero)(unit))
        return subunitText;
    if ((0, exports.isZero)(subunit))
        return unitText;
    return `${unitText} e ${subunitText}`;
};
