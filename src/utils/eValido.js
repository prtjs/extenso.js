const eInteiroValido = require("./eInteiroValido.js");
const analizarDecimal = require("./analizarDecimal.js");

function eValido(numero) {
  const partes = analizarDecimal(numero);
  const [parteInteira, parteDecimal] = partes;

  return partes.length === 1
    ? eInteiroValido(parteInteira)
    : eInteiroValido(parteInteira) && /^\d+$/.test(parteDecimal);
}

module.exports = eValido;
