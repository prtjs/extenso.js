"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const index_1 = __importStar(require("./index"));
/**
 * Função: pluralize
 */
(0, ava_1.default)('Deve pluralizar uma palavra qualquer', (t) => {
    t.is((0, index_1.pluralize)('guia', 2), 'guias');
    t.is((0, index_1.pluralize)('mochileiro', 42), 'mochileiros');
    t.is((0, index_1.pluralize)('guia', 0), 'guia');
    t.is((0, index_1.pluralize)('mochileiro', 1), 'mochileiro');
});
/**
 * Função: writeDecimalFormal
 */
(0, ava_1.default)('Deve escrever formalmente a parte decimal de um número', (t) => {
    t.is((0, index_1.writeDecimalFormal)('1', 'br'), 'um décimo');
    t.is((0, index_1.writeDecimalFormal)('01', 'br'), 'um centésimo');
    t.is((0, index_1.writeDecimalFormal)('19', 'br'), 'dezenove centésimos');
    t.is((0, index_1.writeDecimalFormal)('19', 'pt'), 'dezanove centésimos');
    t.is((0, index_1.writeDecimalFormal)('001', 'br'), 'um milésimo');
    t.is((0, index_1.writeDecimalFormal)('0000000001', 'br'), 'um décimo de bilionésimo');
    t.is((0, index_1.writeDecimalFormal)('005', 'br'), 'cinco milésimos');
    t.is((0, index_1.writeDecimalFormal)('125', 'br'), 'cento e vinte e cinco milésimos');
    t.is((0, index_1.writeDecimalFormal)('00285026', 'br'), 'duzentos e oitenta e cinco mil e vinte e seis centésimos de milionésimo');
});
/**
 * Função: writeDecimalInformal
 */
(0, ava_1.default)('Deve escrever informalmente a parte decimal de um número', (t) => {
    // Em pt-BR
    t.is((0, index_1.writeDecimalInformal)('19', 'br'), 'vírgula dezenove');
    t.is((0, index_1.writeDecimalInformal)('42', 'br'), 'vírgula quarenta e dois');
    // Em pt-PT
    t.is((0, index_1.writeDecimalInformal)('19', 'pt'), 'vírgula dezanove');
    t.is((0, index_1.writeDecimalInformal)('42', 'pt'), 'vírgula quarenta e dois');
});
/**
 * Função: writeDecimal
 */
(0, ava_1.default)('Deve escrever a parte decimal', (t) => {
    // Em pt-BR
    t.is((0, index_1.default)('14', 'br'), 'quatorze centésimos');
    t.is((0, index_1.default)('14', 'br', 'formal'), 'quatorze centésimos');
    t.is((0, index_1.default)('14', 'br', 'informal'), 'vírgula quatorze');
    // Em pt-PT
    t.is((0, index_1.default)('14', 'pt'), 'catorze centésimos');
    t.is((0, index_1.default)('14', 'pt', 'formal'), 'catorze centésimos');
    t.is((0, index_1.default)('14', 'pt', 'informal'), 'vírgula catorze');
});
