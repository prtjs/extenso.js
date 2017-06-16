"use strict";

// Todos os comentários,
// nome de variáveis e funções devem
// estar na língua portuguesa.

const $ = require("s");
const formatar = require("comma-number");

// Escreve números de 0 a 9.
function ateh9(numero, feminino) {
  const porExtenso = {
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

  const porExtenso = {
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
    const dezenas = porExtenso[numero - numero % 10];
    const unidades = ateh9(numero % 10, feminino);

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

  const porExtenso = {
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
    const dezenas = porExtenso[numero - numero % 100];
    const unidades = ateh99(numero % 100, feminino);

    return $("%s e %s", dezenas, unidades);
  }
}

// Escreve números inteiros e negativos
// por extenso.
function escreverInteiro(numero, feminino) {

  // Futuramente vai armazenar o número formatado.
  let formatado;

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
  const ehNegativo = numero < 0;

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
    let milhares = [
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
    numero = numero.split(".").map((inteiro, indice) => milhares[indice]
      ? $("%s %s", inteiro, milhares[indice])
      : inteiro).join(" ");

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
    numero = numero.replace(/\d+/g, inteiro => ateh999(parseInt(inteiro)));

    return ehNegativo
      ? $("menos %s", numero)
      : numero;
  }
}

// Função para escrever parte decimal.
// Construído com base nas informações obtidas
// em <https://goo.gl/E09Y5a>.
function escreverDecimal(numero) {
  const decimais = {
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

  let porExtenso = escreverInteiro(numero);
  let leitura;

  if (numero.length < 3) {
    leitura = numero.length === 1
      ? "décimo"
      : "centésimo";
  } else {
    const de = decimais[numero.length - numero.length % 3];

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

  const feminino = opcoes.feminino;

  // Se não for um número com virgula.
  if (!/,/.test(numero)) {
    return escreverInteiro(numero, feminino);
  }

  // Separa inteiro e decimal.
  const separado = numero.split(",");

  // Escreve por extenso a parte inteira
  // e decimal do número.
  const int = escreverInteiro(separado[0]);
  const dec = escreverDecimal(separado[1]);

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
  const porExtenso = $("%s inteiros e %s", int, dec);

  // Caso a parte inteira seja "um".
  if (int === "um") {

    // Singulariza "inteiros".
    return porExtenso.replace(/(inteiro)s/, "$1");
  } else {
    return porExtenso;
  }
};
