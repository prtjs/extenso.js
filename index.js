'use strict';

function um(num) {
    var numeros = [
        'zero',
        'um',
        'dois',
        'três',
        'quatro',
        'cinco',
        'seis',
        'sete',
        'oito',
        'nove'
    ];

    return numeros[num];
}

function dez(num) {
    if (num < 10) {
        return um(num);
    }

    var numeros = [
        'dez',
        'onze',
        'doze',
        'treze',
        'quatorze',
        'quinze',
        'dezesseis',
        'dezessete',
        'dezoito',
        'dezenove',
        'vinte',
        'trinta',
        'quarenta',
        'cinquenta',
        'sessenta',
        'setenta',
        'oitenta',
        'noventa'
    ];

    if (num < 20) {
        return numeros[num - 10];
    } else {
        var n1 = numeros[(num - num % 10) / 10 + 8],
            n2 = num % 10;

        if (!(num % 10)) {
            return n1;
        } else {
            return n1 + ' e ' + um(n2);
        }
    }
}

function cem(num) {
    if (num < 100) {
        return dez(num);
    } else if (num === 100) {
        return 'cem';
    } else {
        var numeros = [
            'cento',
            'duzentos',
            'trezentos',
            'quatrocentos',
            'quinhentos',
            'seissentos',
            'setecentos',
            'oitocentos',
            'novecentos'
        ];

        var n1 = numeros[(num - num % 100) / 100 - 1],
            n2 = num % 100;

        if (!(num % 100)) {
            return n1;
        } else {
            return n1 + ' e ' + dez(n2);
        }
    }
}

function f(numero, singular, plural, fun) {
    return function (num) {
        if (num === 1e3) {
            return 'mil';
        }

        var n = (num - num % numero) / numero, n2;

        if (num < numero) {
            return fun(num);
        } else if (n === 1) {
            if (num === numero) {
                return 'um ' + singular;
            }

            n2 = num % numero;

            if (num < 1e6) {
                if (!(n2 % 100) || n2 < 100) {
                    return singular + ' e ' + fun(n2);
                } else {
                    return singular + ' ' + fun(n2);
                }
            } else {
                if (!(n2 % 100) || n2 < 100) {
                    return 'um ' + singular + ' e ' + fun(n2);
                } else {
                    return 'um ' + singular + ' ' + fun(n2);
                }
            }
        } else {
            if (!(num % numero)) {
                return fun(n) + ' ' + plural;
            } else {
                var n1 = n;
                n2 = num % numero;

                if (!(n2 % 100) || n2 < 100) {
                    return fun(n1) + ' ' + plural + ' e ' + fun(n2);
                } else {
                    return fun(n1) + ' ' + plural + ' ' + fun(n2);
                }
            }
        }
    };
}

var mil = f(1e+3, 'mil', 'mil', cem),
    milhao = f(1e+6, 'milhão', 'milhões', mil),
    bilhao = f(1e+9, 'bilhão', 'bilhões', milhao),
    trilhao = f(1e+12, 'trilhão', 'trilhões', bilhao);

module.exports = function (num) {
    if (typeof num === 'number' && !(num % 1) && num >= 0 && num < 1e+15) {
        return trilhao(num);
    } else if (num) {
        return new Error('Número inválido');
    } else {
        return undefined;
    }
};
