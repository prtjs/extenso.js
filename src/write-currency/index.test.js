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
 * Função: writeCurrency
 */
(0, ava_1.default)('Deve escrever valores monetários por extenso', (t) => {
    // Testes com o REAL
    t.is((0, index_1.default)('BRL', 'br', '0'), 'zero reais');
    t.is((0, index_1.default)('BRL', 'br', '1'), 'um real');
    t.is((0, index_1.default)('BRL', 'br', '2'), 'dois reais');
    t.is((0, index_1.default)('BRL', 'br', '1', '50'), 'um real e cinquenta centavos');
    t.is((0, index_1.default)('BRL', 'br', '2', '5'), 'dois reais e cinquenta centavos');
    t.is((0, index_1.default)('BRL', 'br', '0', '1'), 'dez centavos');
    t.is((0, index_1.default)('BRL', 'br', '0', '5'), 'cinquenta centavos');
    t.is((0, index_1.default)('BRL', 'br', '0', '05'), 'cinco centavos');
    t.is((0, index_1.default)('BRL', 'br', undefined, '25'), 'vinte e cinco centavos');
    t.is((0, index_1.default)('BRL', 'br', '1000000'), 'um milhão de reais');
    t.is((0, index_1.default)('BRL', 'br', '1000011'), 'um milhão e onze reais');
    t.is((0, index_1.default)('BRL', 'br', '2000000', '50'), 'dois milhões de reais e cinquenta centavos');
    // Testes com o ESCUDO
    t.is((0, index_1.default)('CVE', 'pt', '1'), 'um escudo');
    t.is((0, index_1.default)('CVE', 'pt', '2'), 'dois escudos');
    t.is((0, index_1.default)('CVE', 'br', '14', '50'), 'quatorze escudos e cinquenta cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '14', '50'), 'catorze escudos e cinquenta cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '1', '50'), 'um escudo e cinquenta cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '2', '5'), 'dois escudos e cinquenta cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '0', '1'), 'dez cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '0', '5'), 'cinquenta cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '0', '05'), 'cinco cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', undefined, '25'), 'vinte e cinco cêntimos');
    t.is((0, index_1.default)('CVE', 'pt', '1000000'), 'um milhão de escudos');
    t.is((0, index_1.default)('CVE', 'pt', '2000000', '50'), 'dois milhões de escudos e cinquenta cêntimos');
    // Testes com o EURO
    t.is((0, index_1.default)('EUR', 'pt', '0'), 'zero euros');
    t.is((0, index_1.default)('EUR', 'pt', '1'), 'um euro');
    t.is((0, index_1.default)('EUR', 'pt', '2'), 'dois euros');
    t.is((0, index_1.default)('EUR', 'br', '14', '50'), 'quatorze euros e cinquenta cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '14', '50'), 'catorze euros e cinquenta cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '1', '50'), 'um euro e cinquenta cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '2', '5'), 'dois euros e cinquenta cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '0', '1'), 'dez cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '0', '5'), 'cinquenta cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '0', '05'), 'cinco cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', undefined, '25'), 'vinte e cinco cêntimos');
    t.is((0, index_1.default)('EUR', 'pt', '1000000'), 'um milhão de euros');
    t.is((0, index_1.default)('EUR', 'pt', '2000000', '50'), 'dois milhões de euros e cinquenta cêntimos');
    // Testes com o METICAL
    t.is((0, index_1.default)('MZN', 'pt', '1'), 'um metical');
    t.is((0, index_1.default)('MZN', 'pt', '2'), 'dois meticais');
    t.is((0, index_1.default)('MZN', 'br', '14', '50'), 'quatorze meticais e cinquenta centavos');
    t.is((0, index_1.default)('MZN', 'pt', '14', '50'), 'catorze meticais e cinquenta centavos');
    t.is((0, index_1.default)('MZN', 'pt', '1', '50'), 'um metical e cinquenta centavos');
    t.is((0, index_1.default)('MZN', 'pt', '2', '5'), 'dois meticais e cinquenta centavos');
    t.is((0, index_1.default)('MZN', 'pt', '0', '1'), 'dez centavos');
    t.is((0, index_1.default)('MZN', 'pt', '0', '5'), 'cinquenta centavos');
    t.is((0, index_1.default)('MZN', 'pt', '0', '05'), 'cinco centavos');
    t.is((0, index_1.default)('MZN', 'pt', undefined, '25'), 'vinte e cinco centavos');
    t.is((0, index_1.default)('MZN', 'pt', '1000000'), 'um milhão de meticais');
    t.is((0, index_1.default)('MZN', 'pt', '2000000', '50'), 'dois milhões de meticais e cinquenta centavos');
});
/**
 * Função: getIsos
 */
(0, ava_1.default)('Deve retornar lista dos códigos ISO de um registro de moedas', (t) => {
    t.deepEqual((0, index_1.getIsos)({ FOO: {}, BAR: {}, BAZ: {} }), ['FOO', 'BAR', 'BAZ']);
});
/**
 * Função: isValidIso
 */
(0, ava_1.default)('Deve verificar se há um código ISO registrado', (t) => {
    t.true((0, index_1.isValidIso)('FOO', { FOO: {}, BAR: {}, BAZ: {} }));
});
/**
 * Função: isZero
 */
(0, ava_1.default)('Deve verificar se um número, envolvido em string, é igual a zero', (t) => {
    t.true((0, index_1.isZero)('0'));
    t.true((0, index_1.isZero)('00'));
    t.true((0, index_1.isZero)('000'));
    t.false((0, index_1.isZero)('4'));
    t.false((0, index_1.isZero)('42'));
    t.false((0, index_1.isZero)('420'));
});
