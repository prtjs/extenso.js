"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.singularize = exports.name = exports.clear = exports.addConjunction = exports.addComma = void 0;
exports.reverse = reverse;
const int_util_1 = require("./int-util");
const get_list_1 = require("../get-list");
const lt1000_1 = __importDefault(require("../lt1000"));
const addComma = (parts) => {
    return parts.map((part, i, array) => {
        // REGRA: Não adiciona entre a penúltima e a última parte.
        return i < array.length - 2
            ? `${part},`
            : part;
    });
};
exports.addComma = addComma;
const addConjunction = (parts, int) => {
    const lastNum = (0, int_util_1.getLastNumber)(int);
    // A parte é valida apenas se:
    // - Caso 1: A parte é um inteiro menor que cem.
    // - Caso 2: A parte é um inteiro divisível por cem.
    if (lastNum < 100 || lastNum % 100 === 0) {
        return parts.map((part, i, array) => {
            return i === array.length - 2
                ? `${part} e`
                : part;
        });
    }
    return parts;
};
exports.addConjunction = addConjunction;
const clear = (parts) => {
    // Etapas para a remoção:
    // - Etapa 1: Remove zeros à esquerda.
    // - Etapa 2: Remove partes que não são lidas.
    // - Etapa 3: Remove o "1" das partes com "1 mil".
    return parts
        .map(part => part.replace(/^0+\s?/, ''))
        .filter(part => /^\d/.test(part))
        .map(part => part.replace(/^1\s(mil)$/, '$1'));
};
exports.clear = clear;
// TODO: Adiciona ao testes
function reverse(arr) {
    arr.reverse();
    return arr;
}
const name = (parts, locale, scale) => {
    return reverse(reverse(parts).map((part, i) => {
        const numberName = (0, get_list_1.listGt1000)(locale, scale)[i - 1];
        return numberName
            ? `${part} ${numberName}`
            : part;
    }));
};
exports.name = name;
const singularize = (parts) => {
    const regex = /^(1\s.*)ões/;
    const replacer = (str) => str.replace(regex, '$1ão');
    return parts.map(replacer);
};
exports.singularize = singularize;
const write = (parts, locale) => {
    return parts.map(part => {
        return part.replace(/^(\d+)/, digit => {
            const int = parseInt(digit);
            return (0, lt1000_1.default)(int, locale);
        });
    });
};
exports.write = write;
