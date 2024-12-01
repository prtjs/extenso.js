"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const get_list_1 = require("./get-list");
/**
 * Função: *
 */
(0, ava_1.default)('Deve ser funções que retornam arrays', (t) => {
    t.true(Array.isArray((0, get_list_1.listLt10)()));
    t.true(Array.isArray((0, get_list_1.listLt100)('br')));
    t.true(Array.isArray((0, get_list_1.listLt100)('pt')));
    t.true(Array.isArray((0, get_list_1.listLt1000)()));
    t.true(Array.isArray((0, get_list_1.listGt1000)('br')));
    t.true(Array.isArray((0, get_list_1.listGt1000)('pt')));
    t.true(Array.isArray((0, get_list_1.listDecimals)()));
});
/**
 * Função: listLt100, listGt1000
 */
(0, ava_1.default)('Deve retornar o número com base na localização', (t) => {
    t.is((0, get_list_1.listLt100)('br')[4], 'quatorze');
    t.is((0, get_list_1.listLt100)('pt')[4], 'catorze');
    t.is((0, get_list_1.listGt1000)('br')[2], 'bilhões');
    t.is((0, get_list_1.listGt1000)('pt')[2], 'biliões');
});
