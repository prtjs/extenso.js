"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const write_subunit_1 = __importDefault(require("./write-subunit"));
(0, ava_1.default)('Deve obter a sub-unidade escrita por extenso', (t) => {
    const opts = {
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    };
    t.is((0, write_subunit_1.default)('0', 'br', opts), 'zero centavos');
    t.is((0, write_subunit_1.default)('1', 'br', opts), 'um centavo');
    t.is((0, write_subunit_1.default)('19', 'br', opts), 'dezenove centavos');
    t.is((0, write_subunit_1.default)('19', 'pt', opts), 'dezanove centavos');
    t.is((0, write_subunit_1.default)('50', 'br', opts), 'cinquenta centavos');
});
