const centenas = require("./classes/primeira/centenas.json");
const normalizar = require("./utils/normalizar");
const a99 = require("./a99");

function a999(numero, eFeminino) {
  numero = normalizar(numero);

  if (numero < 99) return a99(numero, eFeminino);
  if (numero === "100") return "cem";
  if (numero % 100 === 0) return centenas[numero / 100 - 1];

  const resto = numero % 100;
  const centena = numero - resto;
  const restoExtenso = a99(resto, eFeminino);
  const centenaExtenso = centenas[centena / 100 - 1];

  return `${centenaExtenso} e ${restoExtenso}`;
}

module.exports = a999;
