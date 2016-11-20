(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.extenso = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function um(numero, fem) {
    var numeros = {
        '0': 'zero',
        '1': (!fem ? 'um' : 'uma'),
        '2': (!fem ? 'dois' : 'duas'),
        '3': 'três',
        '4': 'quatro',
        '5': 'cinco',
        '6': 'seis',
        '7': 'sete',
        '8': 'oito',
        '9': 'nove'
    };

    return numeros[numero];
}

function dez(numero, fem) {
    if (numero < 10) {
        return um(numero, fem);
    }

    var numeros = {
        '10': 'dez',
        '11': 'onze',
        '12': 'doze',
        '13': 'treze',
        '14': 'quatorze',
        '15': 'quinze',
        '16': 'dezesseis',
        '17': 'dezessete',
        '18': 'dezoito',
        '19': 'dezenove',
        '20': 'vinte',
        '30': 'trinta',
        '40': 'quarenta',
        '50': 'cinquenta',
        '60': 'sessenta',
        '70': 'setenta',
        '80': 'oitenta',
        '90': 'noventa'
    };

    var inicio = numero - numero % 10,
        fim = numero % 10;

    if (numero < 20) {
        return numeros[numero];
    } else {
        if (numero % 10 === 0) {
            return numeros[numero];
        } else {
            return numeros[inicio] + ' e ' + um(fim, fem);
        }
    }
}

function cem(numero, fem) {
    if (numero < 100) {
        return dez(numero, fem);
    } else if (numero === 100) {
        return 'cem';
    } else {
        var numeros = {
            '100': 'cento',
            '200': 'duzentos',
            '300': 'trezentos',
            '400': 'quatrocentos',
            '500': 'quinhentos',
            '600': 'seissentos',
            '700': 'setecentos',
            '800': 'oitocentos',
            '900': 'novecentos'
        };

        var inicio = numero - numero % 100,
            fim = numero % 100;

        if (numero % 100 === 0) {
            return numeros[numero];
        } else {
            return numeros[inicio] + ' e ' + dez(fim, fem);
        }
    }
}

function reverse(str) {
    str = str.toString();

    return str.split('').reverse().join('');
}

function separar(numero) {
    var rev = reverse(numero).match(/.?.?.?/g);
    rev = rev.slice(0, rev.length - 1).reverse();

    var a = [];

    rev.forEach(function (i) {
        a.push(reverse(i));
    });

    return a.join('.');
}

function extenso(numero, fem) {
    var separado;

    if (/\./.test(numero)) {
        if (/^\d?\d?\d?(\.\d{3})+$/.test(numero)) {
            separado = numero;
            numero = numero.replace(/\./g, '');
        } else {
            return undefined;
        }
    }

    if (isNaN(numero)) {
        return NaN;
    }

    var positivo = numero,
        negativo = false;

    if (numero < 0) {
        positivo = -numero;
        negativo = true;
    }

    if (numero % 1 || numero > 1e+66 || numero < -1e+66) {
        return undefined;
    } else if (positivo < 1e+3) {
        if (negativo) {
            return 'menos ' + cem(parseInt(positivo), fem);
        } else {
            return cem(parseInt(numero), fem);
        }
    } else if (parseInt(numero) === 1e+3) {
        return 'mil';
    } else {
        var str = typeof numero !== 'string';

        if ((numero > 1e+15 || numero < -1e+15) && str) {
            return undefined;
        }

        var numeros = [
            'mil',
            'milhões',
            'bilhões',
            'trilhões',
            'quatrilhões',
            'quintilhões',
            'sextilhões',
            'septilhões',
            'octilhões',
            'nonilhões',
            'decilhões',
            'undecilhões',
            'duodecilhões',
            'tredecilhões',
            'quattuordecilhões',
            'quindecilhões',
            'sexdecilhões',
            'septendecilhões',
            'octodecilhões',
            'novendecilhões',
            'vigintilhões'
        ];

        var ext;

        if (separado) {
            ext = separado;
        } else {
            ext = separar(numero.toString());
        }

        if (negativo) {
            ext = ext.substring(1, ext.length);
        }

        var num = numeros.slice(0, ext.match(/\./g).length)
            .reverse();

        num.forEach(function (i) {
            ext = ext.replace(/\./, ' ' + i + ' ');
        });

        ext = ext.replace(/(\b(0+)?1\s.[^\s]*)ões/g, '$1ão')
            .replace(/000\s.[^\s]*|\b0+|\s000$/g, '')
            .replace(/\s\s+/g, ' ')
            .replace(/\s$/, '')
            .replace(/\b(\d(00|\d?))$/g, 'e $1')
            .replace(/\s(\d+\s[\wõã]+)$/g, ' e $1')
            .replace(/\b1\smil\b/g, 'mil');

        var lista = [];

        ext.match(/\d+/g).forEach(function (i) {
            if (/^0+$/.test(i)) {
                lista.push(undefined);
            } else {
                lista.push(i);
            }
        });

        lista.forEach(function (i) {
            if (i) {
                ext = ext.replace(i, cem(parseInt(i)));
            } else {
                ext = ext.replace(/0+/, '');
            }
        });

        if (negativo) {
            return 'menos ' + ext;
        } else {
            return ext;
        }
    }
}

function decimal(numero) {
    var numeros = {
        '3': 'milésimo',
        '6': 'milionésimo',
        '9': 'bilionésimo',
        '12': 'trilionésimo',
        '15': 'quatrilionésimo',
        '18': 'quintilionésimo',
        '21': 'sextilionésimo',
        '24': 'septilionésimo',
        '27': 'octilionésimo',
        '30': 'nonilionésimo',
        '33': 'decilionésimo',
        '36': 'undecilionésimo',
        '39': 'duodecilionésimo',
        '42': 'tredecilionésimo',
        '45': 'quattuordecilionésimo',
        '48': 'quindecilionésimo',
        '51': 'sexdecilionésimo',
        '54': 'septendecilionésimo',
        '57': 'octodecilionésimo',
        '60': 'novendecilionésimo',
        '63': 'vigintilionésimo'
    };

    var inteiro = parseInt(numero),
        len,
        n;

    if (numero.length < 4) {
        len = numero.length;

        if (len === 1) {
            n = cem(inteiro) + ' décimo';
        } else if (len === 2) {
            n = cem(inteiro) + ' centésimo';
        } else {
            n = cem(inteiro) + ' milésimo';
        }

        if (inteiro === 1) {
            return n;
        } else {
            return n + 's';
        }
    } else {
        len = numero.length;

        var tipo = len % 3,
            ext = extenso(numero);

        if (tipo === 0) {
            n = numeros[len];

            if (inteiro === 1) {
                return ext + ' ' + n;
            } else {
                return ext + ' ' + n + 's';
            }
        } else if (tipo === 1) {
            n = numeros[len - 1];

            if (inteiro === 1) {
                return ext + ' décimo de ' + n;
            } else {
                return ext + ' décimos de ' + n + 's';
            }
        } else {
            n = numeros[len - 2];

            if (inteiro === 1) {
                return ext + ' centésimo de ' + n;
            } else {
                return ext + ' centésimos de ' + n + 's';
            }
        }
    }
}

module.exports = function (numero, opcoes) {
    if (!numero) return NaN;

    if (isNaN(numero) && !(/^\d+((\.\d+)+)?$/).test(numero)) {
        if (!(/\d+,\d+/).test(numero)) {
            return NaN;
        }
    }

    opcoes = opcoes || {};

    var fem;

    if (opcoes.feminino) {
        fem = true;
    }

    if (typeof numero === 'string' && !isNaN(numero)) {
        numero = numero.trim();

        var re = /^\d+(\.\d+)?e(-|\+)?\d+$/i;

        if (re.test(numero)) {
            if (numero > 1e+15 || numero < 1e-15) {
                return undefined;
            }

            if (numero % 1 === 0) {
                numero = parseInt(numero).toString();
            } else {
                return undefined;
            }
        }

        if (/^0x[\dA-F]+$/i.test(numero)) {
            numero = parseInt(numero);
        }
    }

    if (/^[\d\.]+,\d+$/.test(numero)) {
        var s = numero.toString()
            .split(',');

        var inte = extenso(s[0]),
            nint = decimal(s[1]);

        if (/^0+$/.test(s[1])) {
            return inte;
        } else if (inte === 'zero') {
            return nint;
        } else {
            if (inte === 'um') {
                return 'um inteiro e ' + nint;
            } else {
                return inte + ' inteiros e ' + nint;
            }
        }
    } else {
        return extenso(numero, fem);
    }
};

},{}]},{},[1])(1)
});