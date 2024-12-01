"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const util_1 = require("./util");
(0, ava_1.default)('Deve retornar "décimo" ou "centésimo" para determinados números', (t) => {
    t.is((0, util_1.getType)(7), 'décimo');
    t.is((0, util_1.getType)(10), 'décimo');
    t.is((0, util_1.getType)(13), 'décimo');
    t.is((0, util_1.getType)(8), 'centésimo');
    t.is((0, util_1.getType)(11), 'centésimo');
    t.is((0, util_1.getType)(14), 'centésimo');
});
