const analizarDecimal = require("./utils/analizarDecimal.js");
const eDecimal = require("./utils/eDecimal.js");
const eDecimalValido = require("./utils/eDecimalValido.js");
const eValido = require("./utils/eValido.js");
const normalizar = require("./utils/normalizar.js");
const maiorQueMil = require("./maiorQueMil.js");
const decimal = require("./decimal.js");

function extenso(numero) {
  numero = numero.toString();

  if (eDecimal(numero) && eDecimalValido(numero)) {
    if (/^0+$/.test(numero)) return maiorQueMil(numero);

    const partes = analizarDecimal(numero);
    const [parteInteira, parteDecimal] = partes;
    const extensoInteira = maiorQueMil(parteInteira);
    const extensoDecimal = decimal(parteDecimal);

    if (normalizar(parteInteira) > 1) return `${extensoInteira} inteiros e ${extensoDecimal}`;
    return `${extensoInteira} inteiro e ${extensoDecimal}`;
  } else {
    if (eValido(numero)) {
      return maiorQueMil(numero);
    }
    return NaN;
  }
}

module.exports = extenso;
