const eValido = require("./eValido.js");
const analizarDecimal = require("./analizarDecimal.js");

function eDecimalValido(numero) {
  const partes = analizarDecimal(numero);
  const [parteInteira, parteDecimal] = partes;

  return eValido(parteInteira) && /^\d+$/.test(parteDecimal);
}

module.exports = eDecimalValido;
