const analizarDecimal = require("./utils/analizarDecimal.js");
const eInteiroValido = require("./utils/eInteiroValido.js");
const eValido = require("./utils/eValido.js");
const eDecimal = require("./utils/eDecimal.js");
const normalizar = require("./utils/normalizar.js");
const maiorQueMil = require("./maiorQueMil.js");
const decimal = require("./decimal.js");

function extenso(numero, opcoes) {
  numero = numero.toString();
  opcoes = opcoes || {};

  if (eDecimal(numero) && !eValido(numero)) return NaN;
  if (!eDecimal(numero) && !eInteiroValido(numero)) return NaN;

  const eFeminino = Boolean(opcoes.feminino);
  const eReal = Boolean(opcoes.real);

  if (eReal) {
    if (eDecimal(numero)) {
      const partes = analizarDecimal(numero);
      const [parteInteira, parteDecimal] = partes;

      let extensoReal = maiorQueMil(parteInteira);
      let extensoCentavos = maiorQueMil(parteDecimal);

      extensoReal = normalizar(parteInteira) < 2
        ? extensoReal + " real"
        : extensoReal + " reais";

      extensoCentavos = normalizar(parteDecimal) < 2
        ? extensoCentavos + " centavo"
        : extensoCentavos + " centavos";

      if (parteDecimal > 99) return undefined;
      if (/^0+$/.test(parteInteira) && /^0+$/.test(parteDecimal)) return "zero real";
      if (/^0+$/.test(parteInteira)) return extensoCentavos;
      if (/^0+$/.test(parteDecimal)) return extensoReal;

      return `${extensoReal} e ${extensoCentavos}`;
    }

    return normalizar(numero) < 2
      ? maiorQueMil(numero) + " real"
      : maiorQueMil(numero) + " reais";
  }

  if (eDecimal(numero)) {
    const partes = analizarDecimal(numero);
    const [parteInteira, parteDecimal] = partes;
    const extensoInteira = maiorQueMil(parteInteira, eFeminino);
    const extensoDecimal = decimal(parteDecimal);

    if (/^0+$/.test(parteDecimal)) return extensoInteira;
    if (normalizar(parteInteira) > 1) return `${extensoInteira} inteiros e ${extensoDecimal}`;
    return `${extensoInteira} inteiro e ${extensoDecimal}`;
  }

  if (eInteiroValido(numero)) {
    return maiorQueMil(numero, eFeminino);
  }

  return NaN;
}

module.exports = extenso;
