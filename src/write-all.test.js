"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const write_all_1 = __importStar(require("./write-all"));
(0, ava_1.default)('Deve escrever números simples por extenso', (t) => {
    t.is((0, write_all_1.default)(0), 'zero');
    t.is((0, write_all_1.default)(100n), 'cem');
    t.is((0, write_all_1.default)(10000000000000001n), 'dez quatrilhões e um');
    t.is((0, write_all_1.default)(0, { mode: 'number' }), 'zero');
    t.is((0, write_all_1.default)('0'), 'zero');
    t.is((0, write_all_1.default)('0', { mode: 'number' }), 'zero');
    t.is((0, write_all_1.default)(1), 'um');
    t.is((0, write_all_1.default)('1'), 'um');
    t.is((0, write_all_1.default)('1', { number: { gender: 'm' } }), 'um');
    t.is((0, write_all_1.default)('1', { number: { gender: 'f' } }), 'uma');
    t.is((0, write_all_1.default)('2'), 'dois');
    t.is((0, write_all_1.default)('42'), 'quarenta e dois');
    t.is((0, write_all_1.default)('100'), 'cem');
    t.is((0, write_all_1.default)('1000'), 'mil');
    t.is((0, write_all_1.default)('1001'), 'mil e um');
});
(0, ava_1.default)('Deve escrever números negativos por extenso', (t) => {
    t.is((0, write_all_1.default)(-42), 'quarenta e dois negativo');
    t.is((0, write_all_1.default)('-42'), 'quarenta e dois negativo');
    t.is((0, write_all_1.default)(-42n), 'quarenta e dois negativo');
    t.is((0, write_all_1.default)('-42', { negative: 'formal' }), 'quarenta e dois negativo');
    t.is((0, write_all_1.default)('-42', { negative: 'informal' }), 'menos quarenta e dois');
});
(0, ava_1.default)('Deve escrever números decimais por extenso', (t) => {
    t.is((0, write_all_1.default)('0,14'), 'quatorze centésimos');
    t.is((0, write_all_1.default)('0,14', { number: { decimal: 'informal' } }), 'zero vírgula quatorze');
    t.is((0, write_all_1.default)('1,14'), 'um inteiro e quatorze centésimos');
    t.is((0, write_all_1.default)('1,14', { number: { gender: 'f' } }), 'uma inteira e quatorze centésimos');
    t.is((0, write_all_1.default)('3,14'), 'três inteiros e quatorze centésimos');
    t.is((0, write_all_1.default)('3,14', { locale: 'pt' }), 'três inteiros e catorze centésimos');
});
(0, ava_1.default)('Deve escrever números com decimais separados por ponto', (t) => {
    const options = { 'number': { 'decimalSeparator': 'dot' } };
    t.is((0, write_all_1.default)('1', options), 'um');
    t.is((0, write_all_1.default)('1,001', options), 'mil e um');
    t.is((0, write_all_1.default)('1,000,000.14', options), 'um milhão inteiros e quatorze centésimos');
    t.is((0, write_all_1.default)('3.14', options), 'três inteiros e quatorze centésimos');
    t.is((0, write_all_1.default)(3.14, options), 'três inteiros e quatorze centésimos');
    t.is((0, write_all_1.default)(3.14), 'três inteiros e quatorze centésimos');
});
(0, ava_1.default)('Deve escrever valores monetários por extenso', (t) => {
    t.is((0, write_all_1.default)(0, { mode: 'currency' }), 'zero reais');
    t.is((0, write_all_1.default)('1', { mode: 'currency' }), 'um real');
    t.is((0, write_all_1.default)('2', { mode: 'currency' }), 'dois reais');
    t.is((0, write_all_1.default)('-2', { mode: 'currency' }), 'dois reais negativo');
    t.is((0, write_all_1.default)('-2', { mode: 'currency', negative: 'informal' }), 'menos dois reais');
    t.is((0, write_all_1.default)('3,50', { mode: 'currency' }), 'três reais e cinquenta centavos');
    t.is((0, write_all_1.default)(1.123456, { mode: 'currency' }), 'um real e doze centavos');
    t.is((0, write_all_1.default)(1882.666, { mode: 'currency' }), 'mil oitocentos e oitenta e dois reais e sessenta e seis centavos');
    t.is((0, write_all_1.default)('17', { mode: 'currency' }), 'dezessete reais');
    t.is((0, write_all_1.default)('17', { mode: 'currency', locale: 'pt' }), 'dezassete reais');
    t.is((0, write_all_1.default)('1000000', { mode: 'currency' }), 'um milhão de reais');
    t.is((0, write_all_1.default)(1000000n, { mode: 'currency' }), 'um milhão de reais');
    t.is((0, write_all_1.default)('2000000', { mode: 'currency' }), 'dois milhões de reais');
    t.is((0, write_all_1.default)('33000000', { mode: 'currency' }), 'trinta e três milhões de reais');
    t.is((0, write_all_1.default)('1', { mode: 'currency', currency: { type: 'EUR' } }), 'um euro');
    t.is((0, write_all_1.default)('1,50', { mode: 'currency', currency: { type: 'EUR' } }), 'um euro e cinquenta cêntimos');
    t.is((0, write_all_1.default)('100', { mode: 'currency', currency: { type: 'EUR' } }), 'cem euros');
});
(0, ava_1.default)('Deve escrever conforme a escala desejada', (t) => {
    t.is((0, write_all_1.default)('2.000.000.001', { scale: 'short' }), 'dois bilhões e um');
    t.is((0, write_all_1.default)(2000000001n, { scale: 'short' }), 'dois bilhões e um');
    t.is((0, write_all_1.default)('2.000.000.001', { scale: 'short', number: { gender: 'f' } }), 'duas bilhões e uma');
    t.is((0, write_all_1.default)('2.000.000.001', { scale: 'long' }), 'dois mil milhões e um');
    t.is((0, write_all_1.default)('2.000.000.001', { scale: 'long', number: { gender: 'f' } }), 'duas mil milhões e uma');
    t.is((0, write_all_1.default)('2.000.000.001', { mode: 'currency', scale: 'short' }), 'dois bilhões e um reais');
    t.is((0, write_all_1.default)('2.000.000.001', { mode: 'currency', scale: 'long' }), 'dois mil milhões e um reais');
});
(0, ava_1.default)('Deve verificar se uma opção é válida', (t) => {
    t.true((0, write_all_1.isValidOpt)('foo', ['foo', 'bar', 'baz']));
    t.false((0, write_all_1.isValidOpt)('bar', ['foo', 'baz']));
});
(0, ava_1.default)('Deve passar para o negativo um número escrito por extenso', (t) => {
    t.is((0, write_all_1.toNegative)('um'), 'um negativo');
    t.is((0, write_all_1.toNegative)('um', 'formal'), 'um negativo');
    t.is((0, write_all_1.toNegative)('um', 'informal'), 'menos um');
});
