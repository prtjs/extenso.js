const eValido = require("./utils/eValido");
const eInteiro = require("./utils/eInteiro");
const eDecimal = require("./utils/eDecimal");
const eNegativo = require("./utils/eNegativo");
const emDecimal = require("./emDecimal");
const emReal = require("./emReal");
const maiorQueMil = require("./maiorQueMil");

function extenso(numero, opcoes) {
  numero = numero.toString();
  opcoes = opcoes || {};

  if (!eValido(numero)) return NaN;

  const eFeminino = Boolean(opcoes.feminino);
  const paraReal = Boolean(opcoes.real);
  const paraInteiro = eInteiro(numero);
  const paraDecimal = eDecimal(numero);
  const paraNegativo = eNegativo(numero);

  var porExtenso;

  if (paraReal) porExtenso = emReal(numero);
  else if (paraInteiro) porExtenso = maiorQueMil(numero, eFeminino);
  else if (paraDecimal) porExtenso = emDecimal(numero, eFeminino);
  else return NaN;

  return paraNegativo
    ? `menos ${porExtenso}`
    : porExtenso;
}

module.exports = extenso;
