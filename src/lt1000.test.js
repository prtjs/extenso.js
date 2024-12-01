"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const lt1000_1 = __importDefault(require("./lt1000"));
(0, ava_1.default)('Deve escrever números menores que mil', (t) => {
    t.is((0, lt1000_1.default)(0, 'br'), 'zero');
    t.is((0, lt1000_1.default)(9, 'br'), 'nove');
    t.is((0, lt1000_1.default)(10, 'br'), 'dez');
    t.is((0, lt1000_1.default)(19, 'br'), 'dezenove');
    t.is((0, lt1000_1.default)(19, 'pt'), 'dezanove');
    t.is((0, lt1000_1.default)(20, 'br'), 'vinte');
    t.is((0, lt1000_1.default)(90, 'br'), 'noventa');
    t.is((0, lt1000_1.default)(21, 'br'), 'vinte e um');
    t.is((0, lt1000_1.default)(99, 'br'), 'noventa e nove');
    t.is((0, lt1000_1.default)(100, 'br'), 'cem');
    t.is((0, lt1000_1.default)(200, 'br'), 'duzentos');
    t.is((0, lt1000_1.default)(301, 'br'), 'trezentos e um');
    t.is((0, lt1000_1.default)(410, 'br'), 'quatrocentos e dez');
    t.is((0, lt1000_1.default)(519, 'br'), 'quinhentos e dezenove');
    t.is((0, lt1000_1.default)(519, 'pt'), 'quinhentos e dezanove');
    t.is((0, lt1000_1.default)(620, 'br'), 'seiscentos e vinte');
    t.is((0, lt1000_1.default)(790, 'br'), 'setecentos e noventa');
    t.is((0, lt1000_1.default)(821, 'br'), 'oitocentos e vinte e um');
    t.is((0, lt1000_1.default)(999, 'br'), 'novecentos e noventa e nove');
});
