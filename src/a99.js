const dezenas = require("./classes/primeira/dezenas.json");
const eInteiroValido = require("./utils/eInteiroValido.js");
const normalizar = require("./utils/normalizar.js");
const a9 = require("./a9.js");

function a99(numero, eFeminino) {
  if (!eInteiroValido(numero)) return NaN;
  numero = normalizar(numero);

  if (numero < 10) return a9(numero, eFeminino);
  if (numero < 20) return dezenas[numero - 10];

  const unidade = numero % 10;
  const dezena = numero - unidade;
  const dezenaExtenso = dezenas[8 + dezena / 10];
  const unidadeExtenso = a9(unidade, eFeminino);

  if (unidade === 0) return dezenaExtenso;

  return `${dezenaExtenso} e ${unidadeExtenso}`;
}

module.exports = a99;
