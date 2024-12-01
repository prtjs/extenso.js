"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const parts_util_1 = require("./parts-util");
/**
 * Função: addComma
 */
(0, ava_1.default)('Deve adicionar vírgula no final de algumas partes', (t) => {
    t.deepEqual((0, parts_util_1.addComma)(['1 milhão', 'mil e', '42']), ['1 milhão,', 'mil e', '42']);
    t.deepEqual((0, parts_util_1.addComma)(['1 milhão', 'mil', '420']), ['1 milhão,', 'mil', '420']);
});
/**
 * Função: addConjunction
 */
(0, ava_1.default)('Deve adicionar "e" no final de algumas partes', (t) => {
    t.deepEqual((0, parts_util_1.addConjunction)(['mil', '4'], '1004'), ['mil e', '4']);
    t.deepEqual((0, parts_util_1.addConjunction)(['mil', '42'], '1042'), ['mil e', '42']);
    t.deepEqual((0, parts_util_1.addConjunction)(['mil', '200'], '1200'), ['mil e', '200']);
    t.deepEqual((0, parts_util_1.addConjunction)(['mil', '420'], '1420'), ['mil', '420']);
});
/**
 * Função: clear
 */
(0, ava_1.default)('Deve trechos em partes que não são lidos', (t) => {
    t.deepEqual((0, parts_util_1.clear)(['2 milhões', '042 mil', '001']), ['2 milhões', '42 mil', '1']);
    t.deepEqual((0, parts_util_1.clear)(['2 milhões', '000 mil', '000']), ['2 milhões']);
    t.deepEqual((0, parts_util_1.clear)(['1 mil']), ['mil']);
});
/**
 * Função: name
 */
(0, ava_1.default)('Deve adicionar o nome de cada parte', (t) => {
    t.deepEqual((0, parts_util_1.name)(['1', '000', '000'], 'br'), ['1 milhões', '000 mil', '000']);
    t.deepEqual((0, parts_util_1.name)(['1', '000'], 'br'), ['1 mil', '000']);
    t.deepEqual((0, parts_util_1.name)(['1', '000', '000', '000'], 'pt'), ['1 biliões', '000 milhões', '000 mil', '000']);
    t.deepEqual((0, parts_util_1.name)(['1', '000', '000', '000'], 'pt', 'long'), ['1 mil milhões', '000 milhões', '000 mil', '000']);
});
/**
 * Função: singularize
 */
(0, ava_1.default)('Deve singularizar algumas partes', (t) => {
    t.deepEqual((0, parts_util_1.singularize)(['1 milhões']), ['1 milhão']);
    t.deepEqual((0, parts_util_1.singularize)(['1 bilhões']), ['1 bilhão']);
    t.deepEqual((0, parts_util_1.singularize)(['2 milhões']), ['2 milhões']);
    t.deepEqual((0, parts_util_1.singularize)(['2 bilhões']), ['2 bilhões']);
});
/**
 * Função: write
 */
(0, ava_1.default)('Deve escrever o restante dos números', (t) => {
    t.deepEqual((0, parts_util_1.write)(['3 mil,', '140'], 'br'), ['três mil,', 'cento e quarenta']);
    t.deepEqual((0, parts_util_1.write)(['3 mil e', '14'], 'br'), ['três mil e', 'quatorze']);
    t.deepEqual((0, parts_util_1.write)(['3 mil e', '14'], 'pt'), ['três mil e', 'catorze']);
    t.deepEqual((0, parts_util_1.write)(['3 mil e', '1'], 'br'), ['três mil e', 'um']);
    t.deepEqual((0, parts_util_1.write)(['mil e', '1'], 'br'), ['mil e', 'um']);
});
