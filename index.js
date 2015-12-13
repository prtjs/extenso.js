'use strict';

function um(numero) {
    var numeros = {
        '0': 'zero',
        '1': 'um',
        '2': 'dois',
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

function dez(numero) {
    if (numero < 10) {
        return um(numero);
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
            return numeros[inicio] + ' e ' + um(fim);
        }
    }
}

function cem(numero) {
    if (numero < 100) {
        return dez(numero);
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
            return numeros[inicio] + ' e ' + dez(fim);
        }
    }
}

function separar(numero) {
    function reverse(str) {
        str = str.toString();
        return str.split('').reverse().join('');
    }

    var rev = reverse(numero).match(/.?.?.?/g);
    rev = rev.slice(0, rev.length - 1).reverse();

    var a = [];

    rev.forEach(function (i) {
        a.push(reverse(i));
    });

    return a.join('.');
}

module.exports = function (numero) {
    var separado;

    if (/^\d?\d?\d?(\.\d{3})+$/.test(numero)) {
        separado = numero;
        numero = numero.replace(/\./g, '');
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

    if (numero % 1 || numero > 1e+42 || numero < -1e+42) {
        return undefined;
    } else if (positivo < 1e+3) {
        if (negativo) {
            return 'menos ' + cem(parseInt(positivo));
        } else {
            return cem(parseInt(numero));
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
            'duodecilhões'
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
};
