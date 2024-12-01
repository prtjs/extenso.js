"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const lt10_1 = __importDefault(require("./lt10"));
(0, ava_1.default)('Deve escrever números menores que dez', (t) => {
    t.is((0, lt10_1.default)(0), 'zero');
    t.is((0, lt10_1.default)(5), 'cinco');
    t.is((0, lt10_1.default)(9), 'nove');
});
