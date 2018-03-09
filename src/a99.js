const dezenas = require("./classes/primeira/dezenas.json");
const eValido = require("./utils/eValido.js");
const normalizar = require("./utils/normalizar.js");
const a9 = require("./a9.js");

function a99(numero) {
  if (!eValido(numero)) return NaN;
  numero = normalizar(numero);

  if (numero < 10) return a9(numero);
  if (numero < 20) return dezenas[numero - 10];

  const unidade = numero % 10;
  const dezena = numero - unidade;
  const dezenaExtenso = dezenas[8 + dezena / 10];
  const unidadeExtenso = a9(unidade);

  if (unidade === 0) return dezenaExtenso;

  return `${dezenaExtenso} e ${unidadeExtenso}`;
}

module.exports = a99;
