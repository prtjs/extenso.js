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
const write_int_1 = __importStar(require("./write-int"));
/**
 * Função: toFemale
 */
(0, ava_1.default)('Deve passar os números para o feminino', (t) => {
    t.is((0, write_int_1.toFemale)('vinte e um'), 'vinte e uma');
    t.is((0, write_int_1.toFemale)('quarenta e dois'), 'quarenta e duas');
});
/**
 * Função: writeInt
 */
(0, ava_1.default)('Deve escrever números inteiros', (t) => {
    t.is((0, write_int_1.default)('0', 'br'), 'zero');
    t.is((0, write_int_1.default)('1', 'br'), 'um');
    t.is((0, write_int_1.default)('1', 'br', 'f'), 'uma');
    t.is((0, write_int_1.default)('10', 'br'), 'dez');
    t.is((0, write_int_1.default)('19', 'br'), 'dezenove');
    t.is((0, write_int_1.default)('19', 'pt'), 'dezanove');
    t.is((0, write_int_1.default)('100', 'br'), 'cem');
    t.is((0, write_int_1.default)('1000', 'br'), 'mil');
    t.is((0, write_int_1.default)('1001', 'br'), 'mil e um');
    t.is((0, write_int_1.default)('1000000', 'br'), 'um milhão');
    t.is((0, write_int_1.default)('1000001', 'br'), 'um milhão e um');
    t.is((0, write_int_1.default)('2000000', 'br'), 'dois milhões');
    t.is((0, write_int_1.default)('2000001', 'br'), 'dois milhões e um');
    t.is((0, write_int_1.default)('2000000001', 'br'), 'dois bilhões e um');
    t.is((0, write_int_1.default)('2000000001', 'br', 'm', 'short'), 'dois bilhões e um');
    t.is((0, write_int_1.default)('2000000001', 'pt', 'm', 'short'), 'dois biliões e um');
    t.is((0, write_int_1.default)('2000000001', 'br', 'm', 'long'), 'dois mil milhões e um');
});
