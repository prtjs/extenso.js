"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const int_util_1 = require("./int-util");
/**
 * Função: split
 */
(0, ava_1.default)('Deve separar as partes de um número', (t) => {
    t.deepEqual((0, int_util_1.split)('1'), ['1']);
    t.deepEqual((0, int_util_1.split)('10'), ['10']);
    t.deepEqual((0, int_util_1.split)('100'), ['100']);
    t.deepEqual((0, int_util_1.split)('1000'), ['1', '000']);
    t.deepEqual((0, int_util_1.split)('1000000'), ['1', '000', '000']);
});
/**
 * Função: getLastNumber
 */
(0, ava_1.default)('Deve retornar a última parte de um número', (t) => {
    t.is((0, int_util_1.getLastNumber)('1000'), 0);
    t.is((0, int_util_1.getLastNumber)('1042'), 42);
    t.is((0, int_util_1.getLastNumber)('314000999'), 999);
});
