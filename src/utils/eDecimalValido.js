const eValido = require("./eValido.js");

function eDecimalValido(numero) {
  const partes = numero.split(",");
  const parteInteira = partes[0];
  const parteDecimal = partes[1];

  return eValido(parteInteira) && /^\d+$/.test(numero);
}

module.exports = eDecimalValido;
