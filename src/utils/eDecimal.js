const analizarDecimal = require("./analizarDecimal");

function eDecimal(numero) {
  return analizarDecimal(numero).length === 2;
}

module.exports = eDecimal;
