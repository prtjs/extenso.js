const eInteiroValido = require("./eInteiroValido.js");
const analizarDecimal = require("./analizarDecimal.js");

function eDecimalValido(numero) {
  const partes = analizarDecimal(numero);
  const [parteInteira, parteDecimal] = partes;

  return eInteiroValido(parteInteira) && /^\d+$/.test(parteDecimal);
}

module.exports = eDecimalValido;
