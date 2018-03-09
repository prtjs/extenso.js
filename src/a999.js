const centenas = require("./numeros/centenas.json");
const a99 = require("./a99.js");

function a999(numero) {
  if (numero < 99) return a99(numero);
  if (numero === 100) return "cem";
  if (numero % 100 === 0) return centenas[numero / 100 - 1];

  const resto = numero % 100;
  const centena = numero - resto;
  const restoExtenso = a99(resto);
  const centenaExtenso = centenas[centena / 100 - 1];

  return `${centenaExtenso} e ${restoExtenso}`;
}

module.exports = a999;
