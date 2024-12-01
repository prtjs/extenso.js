"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const write_1 = __importDefault(require("./write"));
(0, ava_1.default)('Deve obter o valor escrito por extenso', (t) => {
    const opts = {
        singular: 'real',
        plural: 'reais',
    };
    t.is((0, write_1.default)('0', 'br', opts), 'zero reais');
    t.is((0, write_1.default)('1', 'br', opts), 'um real');
    t.is((0, write_1.default)('19', 'br', opts), 'dezenove reais');
    t.is((0, write_1.default)('19', 'pt', opts), 'dezanove reais');
    t.is((0, write_1.default)('50', 'br', opts), 'cinquenta reais');
    t.is((0, write_1.default)('1000000', 'br', opts), 'um milhão de reais');
});
