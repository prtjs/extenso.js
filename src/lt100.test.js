"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const lt100_1 = __importDefault(require("./lt100"));
(0, ava_1.default)('Deve escrever números menores que cem', (t) => {
    t.is((0, lt100_1.default)(0, 'br'), 'zero');
    t.is((0, lt100_1.default)(5, 'br'), 'cinco');
    t.is((0, lt100_1.default)(9, 'br'), 'nove');
    t.is((0, lt100_1.default)(10, 'br'), 'dez');
    t.is((0, lt100_1.default)(14, 'br'), 'quatorze');
    t.is((0, lt100_1.default)(19, 'br'), 'dezenove');
    t.is((0, lt100_1.default)(20, 'br'), 'vinte');
    t.is((0, lt100_1.default)(90, 'br'), 'noventa');
    t.is((0, lt100_1.default)(21, 'br'), 'vinte e um');
    t.is((0, lt100_1.default)(99, 'br'), 'noventa e nove');
    t.is((0, lt100_1.default)(14, 'pt'), 'catorze');
    t.is((0, lt100_1.default)(19, 'pt'), 'dezanove');
});
