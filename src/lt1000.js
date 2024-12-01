"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_list_1 = require("./get-list");
const lt100_1 = __importDefault(require("./lt100"));
/**
 * Obter um número inteiro menor que mil por extenso.
 *
 * @function lt1000
 * @param {number} int Um número inteiro menor que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número escrito por extenso.
 */
exports.default = (int, locale) => {
    if (int < 100)
        return (0, lt100_1.default)(int, locale);
    if (int === 100)
        return 'cem';
    const hundredInt = int - int % 100;
    const restInt = int % 100;
    const hundred = (0, get_list_1.listLt1000)()[hundredInt / 100 - 1];
    const rest = (0, lt100_1.default)(restInt, locale);
    return restInt
        ? `${hundred} e ${rest}`
        : hundred;
};
