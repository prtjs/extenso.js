const separarDecimal = require("./separarDecimal");

function eDecimal(numero) {
  return separarDecimal(numero).length === 2;
}

module.exports = eDecimal;
