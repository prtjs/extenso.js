const dezenas = require("./classes/primeira/dezenas.json");
const normalizar = require("./utils/normalizar");
const a9 = require("./a9");

function a99(numero, eFeminino) {
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
