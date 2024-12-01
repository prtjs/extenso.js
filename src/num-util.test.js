"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const num_util_1 = require("./num-util");
(0, ava_1.default)('Deve validar um número', (t) => {
    t.true((0, num_util_1.isValidNumber)('42'));
    t.true((0, num_util_1.isValidNumber)('42,0'));
    t.true((0, num_util_1.isValidNumber)('42,42'));
    t.true((0, num_util_1.isValidNumber)('1000'));
    t.true((0, num_util_1.isValidNumber)('1234567'));
    t.true((0, num_util_1.isValidNumber)('1234567,42'));
    t.true((0, num_util_1.isValidNumber)('1.000'));
    t.true((0, num_util_1.isValidNumber)('1.234.567'));
    t.true((0, num_util_1.isValidNumber)('1.234.567,42'));
});
(0, ava_1.default)('Deve validar um número (separador decimal = .)', (t) => {
    t.true((0, num_util_1.isValidNumber)('1000', true));
    t.true((0, num_util_1.isValidNumber)('42.5', true));
    t.true((0, num_util_1.isValidNumber)('1234567.42', true));
    t.true((0, num_util_1.isValidNumber)('1,234,567', true));
    t.true((0, num_util_1.isValidNumber)('1,234,567.42', true));
});
(0, ava_1.default)('Deve validar um número (tipo number)', (t) => {
    t.true((0, num_util_1.isValidNumber)(3.14));
    t.true((0, num_util_1.isValidNumber)(42));
});
(0, ava_1.default)('Deve analisar um número', (t) => {
    t.deepEqual((0, num_util_1.parseNumber)('123'), { isNegative: false, integer: '123', decimal: '0' });
    t.deepEqual((0, num_util_1.parseNumber)('-123'), { isNegative: true, integer: '123', decimal: '0' });
    t.deepEqual((0, num_util_1.parseNumber)('123,42'), { isNegative: false, integer: '123', decimal: '42' });
    t.deepEqual((0, num_util_1.parseNumber)('-42.000,42'), { isNegative: true, integer: '42000', decimal: '42' });
});
(0, ava_1.default)('Deve analisar um número (separador decimal = .)', (t) => {
    t.deepEqual((0, num_util_1.parseNumber)('123', true), { isNegative: false, integer: '123', decimal: '0' });
    t.deepEqual((0, num_util_1.parseNumber)('-123', true), { isNegative: true, integer: '123', decimal: '0' });
    t.deepEqual((0, num_util_1.parseNumber)('123.42', true), { isNegative: false, integer: '123', decimal: '42' });
    t.deepEqual((0, num_util_1.parseNumber)('-42,000.42', true), { isNegative: true, integer: '42000', decimal: '42' });
});
(0, ava_1.default)('Deve analisar um número (tipo number)', (t) => {
    t.deepEqual((0, num_util_1.parseNumber)(3.14), { isNegative: false, integer: '3', decimal: '14' });
});
