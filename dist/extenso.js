(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.extenso = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// return a string with the provided number formatted with commas.
// can specify either a Number or a String.
function commaNumber(number, separator, decimalChar) {

  // we'll strip off and hold the decimal value to reattach later.
  // we'll hold both the `number` value and `stringNumber` value.
  var decimal, stringNumber

  // default `separator` is a comma
  separator   = separator   || ','
  // default `decimalChar` is a period
  decimalChar = decimalChar || '.'

  switch (typeof number) {

    case 'string':

      // if there aren't enough digits to need separators then return it
      // NOTE: some numbers which are too small will get passed this
      //       when they have decimal values which make them too long here.
      //       but, the number value check after this switch will catch it.
      if (number.length < (number[0] === '-' ? 5 : 4)) {
        return number
      }

      // remember it as a string in `stringNumber` and convert to a Number
      stringNumber = number

      // if they're not using the Node standard decimal char then replace it
      // before converting.
      number = decimalChar !== '.' ? Number(number.replace(decimalChar, '.'))
                                   : Number(number)
      break

    // convert to a string.
    // NOTE: don't check if the number is too small before converting
    //       because we'll need to return `stringNumber` anyway.
    case 'number': stringNumber = String(number) ; break

    // return invalid type as-is
    default: return number
  }

  // when it doesn't need a separator or isn't a number then return it
  if ((-1000 < number && number < 1000) || isNaN(number) || !isFinite(number)) {
    return stringNumber
  }

  // strip off decimal value to append to the final result at the bottom
  decimal = stringNumber.lastIndexOf(decimalChar)

  if (decimal > -1) {
    decimal = stringNumber.slice(decimal)
    stringNumber = stringNumber.slice(0, -decimal.length)
  } else {
    decimal = null
  }

  // finally, parse the string and add in separators
  stringNumber = parse(stringNumber, separator)

  // if there's a decimal value add it back on the end.
  // NOTE: we sliced() it off including the decimalChar, so it's good.
  return (decimal != null) ? stringNumber + decimal : stringNumber

}


function parse(stringNumber, separator) {

  // below here we split the number at spots to add a separator.
  // then, combine it with the separator and add decimal value (if exists)
  var count, i, start, strings

  start = stringNumber[0] === '-' ? 1 : 0  // start after minus sign
  count = stringNumber.length - start - 1  // count digits after first
  strings = []                             // hold string parts
  i = (count % 3) + 1 + start              // index for first separator

  // grab string content before where the first separator belongs
  strings.push(stringNumber.slice(0, i))

  // split remaining string in groups of 3 where a separator belongs
  while (i < stringNumber.length) {
    strings.push(stringNumber.substr(i, 3))
    i += 3
  }

  // finally, combine groups with the separator
  return strings.join(separator)
}


// convenience function for currying style:
//   var format = commaNumber.bindWith(',', '.')
function bindWith(separator, decimalChar) {
  return function(number) {
    return commaNumber(number, separator, decimalChar)
  }
}

module.exports = commaNumber
module.exports.bindWith = bindWith

},{}],2:[function(require,module,exports){

/**

# s.js: minimalistic javascript sprintf().

    // standalone
    s('http://%s:%d', 'localhost', 40)
    s('got %j', { this: 'will be JSON.stringified' })

    // extend String.prototype
    s.extend();
    'http://%s:%d'.s('localhost', 40);

Only supports `%s` and `%d`. Escape `%` as `%%`.

**/

(function (g) {
  var j = 'undefined' != typeof JSON ? JSON.stringify : String;

  function s (str) {
    var i = 1, args = arguments;
    return String(str).replace(/%?%(d|s|j)/g, function (symbol, type) {
      if ('%' == symbol[1]) return symbol;
      var arg = args[i++];
      switch (type) {
        case 'd': return Number(arg);
        case 'j': return j(arg);
      }
      return String(arg);
    });
  };

  s.extend = function () {
    String.prototype.s = function () {
      var arr = [this];
      arr.push.apply(arr, arguments)
      return s.apply(null, arr);
    }
  }
  g.top ? g.s = s : module.exports = s;
})(this);

},{}],3:[function(require,module,exports){
"use strict";

// Todos os comentários,
// nome de variáveis e funções devem
// estar na língua portuguesa.

var $ = require("s");
var formatar = require("comma-number");

// Escreve números de 0 a 9.
function ateh9(numero, feminino) {
  var porExtenso = {
    "0": "zero",
    "1": (!feminino ? "um" : "uma"),
    "2": (!feminino ? "dois" : "duas"),
    "3": "três",
    "4": "quatro",
    "5": "cinco",
    "6": "seis",
    "7": "sete",
    "8": "oito",
    "9": "nove"
  };

  return porExtenso[numero];
}

// Escreve números de 0 a 99.
function ateh99(numero, feminino) {
  if (numero < 10) {
    return ateh9(numero, feminino);
  }

  var porExtenso = {
    "10": "dez",
    "11": "onze",
    "12": "doze",
    "13": "treze",
    "14": "quatorze",
    "15": "quinze",
    "16": "dezesseis",
    "17": "dezessete",
    "18": "dezoito",
    "19": "dezenove",
    "20": "vinte",
    "30": "trinta",
    "40": "quarenta",
    "50": "cinquenta",
    "60": "sessenta",
    "70": "setenta",
    "80": "oitenta",
    "90": "noventa"
  };

  if (numero < 20) {
    return porExtenso[numero];
  } else if (!(numero % 10)) {
    return porExtenso[numero];
  } else {
    var dezenas = porExtenso[numero - numero % 10];
    var unidades = ateh9(numero % 10, feminino);

    return $("%s e %s", dezenas, unidades);
  }
}

// Escreve números de 0 a 999.
function ateh999(numero, feminino) {
  if (numero < 100) {
    return ateh99(numero, feminino);
  } else if (numero === 100) {
    return "cem";
  }

  var porExtenso = {
    "100": "cento",
    "200": "duzentos",
    "300": "trezentos",
    "400": "quatrocentos",
    "500": "quinhentos",
    "600": "seiscentos",
    "700": "setecentos",
    "800": "oitocentos",
    "900": "novecentos"
  };

  if (!(numero % 100)) {
    return porExtenso[numero];
  } else {
    var dezenas = porExtenso[numero - numero % 100];
    var unidades = ateh99(numero % 100, feminino);

    return $("%s e %s", dezenas, unidades);
  }
}

// Escreve números inteiros e negativos
// por extenso.
function escreverInteiro(numero, feminino) {

  // Futuramente vai armazenar o número formatado.
  var formatado;

  // Se o número já estiver formatado.
  if (/\./.test(numero)) {

    // Se a sua formatação for válida.
    if (/^\-?\d{1,3}(\.\d{3})+$/.test(numero)) {
      formatado = numero;
    } else {
      return undefined;
    }
  }

  // Desformata o número.
  numero = numero.replace(/\./g, "");

  // Se não for um número válido.
  if (isNaN(numero)) {
    return NaN;
  }

  // Se for negativo.
  var ehNegativo = numero < 0

  // Transforma-o em positivo.
  numero = numero.replace(/^\-/, "")

  // Se não for inteiro ou ultrapassar
  // o valor máximo exigido (de até 66 dígitos).
  if (numero % 1 || numero > 1e+66) {
    return undefined;
  } else if (numero < 1000) { // Se for menor que mil.
    numero = ateh999(parseInt(numero), feminino);

    return ehNegativo
      ? $("menos %s", numero) // Negativo.
      : numero; // Positivo
  } else if (parseInt(numero) === 1000) {
    return "mil";
  } else {

    // Informações da escrita dos
    // números obtidas em
    // <https://goo.gl/f4HrRW>.
    var milhares = [
      "mil",
      "milhões",
      "bilhões",
      "trilhões",
      "quatrilhões",
      "quintilhões",
      "sextilhões",
      "septilhões",
      "octilhões",
      "nonilhões",
      "decilhões",
      "undecilhões",
      "duodecilhões",
      "tredecilhões",
      "quattuordecilhões",
      "quindecilhões",
      "sexdecilhões",
      "septendecilhões",
      "octodecilhões",
      "novendecilhões",
      "vigintilhões"
    ];

    // Formatar.
    numero = formatado
      ? formatado
      : formatar(numero.toString(), ".");

    // Deixa-o positivo.
    numero = numero.replace(/^-?/, "");

    //
    // Separa milhares do número.
    //
    // Exemplos:
    //  - "1.000" => ["mil"]
    //  - "1.234.567" => ["milhões", "mil"]
    //
    milhares = milhares
      .slice(0, numero.split(".").length - 1)
      .reverse();

    //
    // Adiciona milhares no número.
    //
    // Exemplos:
    //  - "1.000" => "1 mil 000"
    //  - "123.456.789" => "123 milhões 456 mil 789"
    //
    numero = numero.split(".").map(function (inteiro, indice) {
      return milhares[indice]
        ? $("%s %s", inteiro, milhares[indice])
        : inteiro;
    }).join(" ");

    // Singulariza. Por exemplo, em
    // "1 milhões 000 mil 000", o "1 milhões"
    // será substituído por "1 milhão".
    numero = numero.replace(/(\b0*?1\s.[^\s]*)ões/g, "$1ão");

    // Remove os zeros e as casas que não são
    // escritas. Por exemplo,
    // "1 bilhão 000 milhões 000 mil 001", será
    // substituído por "1 bilhão 1".
    numero = numero.replace(/\s?000(.[^\s]*)?|\b0+/g, "");

    //
    // Adiciona conjunção "e" entre a última casa
    // e o último número.
    //
    // É adicionado somente se o último número for:
    //  - Menor que 100.
    //  - Maior que 100 e divisível por 10.
    //
    numero = numero.replace(/\b(\d(\d|00)?)$/g, "e $1");

    //
    // Adiciona conjunção "e".
    //
    // Por exemplo:
    //  - "3 milhões 14 mil" => "3 milhões e 14 mil"
    //  - "1 milhão" (Aqui não muda nada.)
    //
    numero = numero.replace(/\s(\d+\s[\wõã]+)$/g, " e $1");

    // Subistitui "1 mil" por "mil" em todos os casos.
    numero = numero.replace(/\b1\smil\b/g, "mil");

    // Escreve os números.
    numero = numero.replace(/\d+/g, function (inteiro) {
      return ateh999(parseInt(inteiro));
    });

    return ehNegativo
      ? $("menos %s", numero)
      : numero;
  }
}

// Função para escrever parte decimal.
// Construído com base nas informações obtidas
// em <https://goo.gl/E09Y5a>.
function escreverDecimal(numero) {
  var decimais = {
    "3": "milésimo",
    "6": "milionésimo",
    "9": "bilionésimo",
    "12": "trilionésimo",
    "15": "quatrilionésimo",
    "18": "quintilionésimo",
    "21": "sextilionésimo",
    "24": "septilionésimo",
    "27": "octilionésimo",
    "30": "nonilionésimo",
    "33": "decilionésimo",
    "36": "undecilionésimo",
    "39": "duodecilionésimo",
    "42": "tredecilionésimo",
    "45": "quattuordecilionésimo",
    "48": "quindecilionésimo",
    "51": "sexdecilionésimo",
    "54": "septendecilionésimo",
    "57": "octodecilionésimo",
    "60": "novendecilionésimo",
    "63": "vigintilionésimo"
  };

  var porExtenso = escreverInteiro(numero);
  var leitura;

  if (numero.length < 3) {
    leitura = numero.length === 1
      ? "décimo"
      : "centésimo";
  } else {
    var de = decimais[numero.length - numero.length % 3];

    switch (numero.length % 3) {
      case 0:
        leitura = "";
        break;
      case 1:
        leitura = "décimo";
        break;
      case 2:
        leitura = "centésimo";
        break;
    }

    leitura = leitura
      ? $("%s de %s", leitura, de)
      : de;
  }

  porExtenso = $("%s %s", porExtenso, leitura);

  // Pluraliza.
  if (parseInt(numero) !== 1) {
    porExtenso = porExtenso.replace(/(é[cs]imo)/g, "$1s");
  }

  return porExtenso;
}

module.exports = function (numero, opcoes) {

  // Se nenhum número for informado.
  if (!numero) {
    return undefined;
  }

  // Se for number e tiver mais de
  // 15 dígitos.
  if (
    typeof numero === "number"
    && (numero <= -1e+15
    || numero >= 1e+15)
  ) {
    return undefined;
  }

  // Sempre string.
  numero = numero.toString();

  // Se for um número inválido.
  if (!(/^-?(\d{0,3}(\.\d{3})+?|\d+)(,\d+)?$/.test(numero))) {
    return NaN;
  }

  // Cria objeto para opções caso
  // não exista.
  opcoes = opcoes || {};

  var feminino = opcoes.feminino;

  // Se não for um número com virgula.
  if (!/,/.test(numero)) {
    return escreverInteiro(numero, feminino);
  }

  // Separa inteiro e decimal.
  var separado = numero.split(",");

  // Escreve por extenso a parte inteira
  // e decimal do número.
  var int = escreverInteiro(separado[0]);
  var dec = escreverDecimal(separado[1]);

  // Se o número decimal informado for igual
  // a zero, retorna somente o número inteiro, e
  // caso o inteiro seja igual a zero retorna
  // somente o decimal.
  if (/^0+$/.test(separado[1])) {
    return feminino
      ? escreverInteiro(separado[0], true)
      : int;
  } else if (int === "zero") {
    return dec;
  }

  // Escreve o número por extenso.
  var porExtenso = $("%s inteiros e %s", int, dec);

  // Caso a parte inteira seja "um".
  if (int === "um") {

    // Singulariza "inteiros".
    return porExtenso.replace(/(inteiro)s/, "$1");
  } else {
    return porExtenso;
  }
};

},{"comma-number":1,"s":2}]},{},[3])(3)
});