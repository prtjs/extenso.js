"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDecimals = exports.listGt1000 = exports.listLt1000 = exports.listLt100 = exports.listLt10 = void 0;
const listLt10 = () => {
    return [
        'zero',
        'um',
        'dois',
        'três',
        'quatro',
        'cinco',
        'seis',
        'sete',
        'oito',
        'nove',
    ];
};
exports.listLt10 = listLt10;
const listLt100 = (locale) => {
    return [
        'dez',
        'onze',
        'doze',
        'treze',
        ({ br: 'quatorze', pt: 'catorze' })[locale],
        'quinze',
        ({ br: 'dezesseis', pt: 'dezasseis' })[locale],
        ({ br: 'dezessete', pt: 'dezassete' })[locale],
        'dezoito',
        ({ br: 'dezenove', pt: 'dezanove' })[locale],
        'vinte',
        'trinta',
        'quarenta',
        'cinquenta',
        'sessenta',
        'setenta',
        'oitenta',
        'noventa',
    ];
};
exports.listLt100 = listLt100;
const listLt1000 = () => {
    return [
        'cento',
        'duzentos',
        'trezentos',
        'quatrocentos',
        'quinhentos',
        'seiscentos',
        'setecentos',
        'oitocentos',
        'novecentos',
    ];
};
exports.listLt1000 = listLt1000;
const listGt1000 = (locale, scale = 'short') => {
    const baseList = [
        'mil',
        'milhões',
        // Sem o sufixo, pois ele será dinâmico
        'bil',
        'tril',
        'quatril',
        'quintil',
        'sextil',
        'septil',
        'octil',
        'nonil',
        'decil',
        'undecil',
        'duodecil',
    ];
    return baseList
        .map((value, index) => {
        if (index < 2)
            return value;
        const suffixes = {
            'br': 'hões',
            'pt': 'iões',
        };
        return value + suffixes[locale];
    })
        .map((value, index, array) => {
        if (scale === 'long') {
            if (index < 2)
                return value;
            if (index % 2 === 0)
                return 'mil ' + array[index / 2];
            return array[index / 2 + 0.5];
        }
        else {
            return value;
        }
    });
};
exports.listGt1000 = listGt1000;
const listDecimals = () => {
    return [
        'milésimo',
        'milionésimo',
        'bilionésimo',
        'trilionésimo',
        'quatrilionésimo',
        'quintilionésimo',
        'sextilionésimo',
        'septilionésimo',
        'octilionésimo',
        'nonilionésimo',
        'decilionésimo',
        'undecilionésimo',
        'duodecilionésimo',
    ];
};
exports.listDecimals = listDecimals;
