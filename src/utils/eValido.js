const eInteiro = require("./eInteiro");
const separarDecimal = require("./separarDecimal");

function eValido(numero) {
  const partes = separarDecimal(numero);
  const [parteInteira, parteDecimal] = partes;

  if (partes.length === 1)
      return eInteiro(parteInteira);

  return partes.length === 2
    ? eInteiro(parteInteira) && /^\d+$/.test(parteDecimal)
    : false;
}

module.exports = eValido;
