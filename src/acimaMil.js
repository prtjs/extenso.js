const a999 = require("./a999.js");
const separarClasses = require("./utils/separarClasses.js");
const classesRestantes = require("./classes/restantes.json");

function acimaMil(numero) {
  if (numero < 1000) return a999(numero);

  const separados = separarClasses(numero);
  const quantiaDeClasses = separados.length - 1;
  const classes = classesRestantes.slice(0, quantiaDeClasses).reverse();

  const preExtenso = separados
    .map((valor, indice) =>
      classes[indice] ? `${valor} ${classes[indice]}` : valor)
    .filter(valor =>
      !/^000/.test(valor))
    .map(valor =>
      valor.replace(/^0+/, ""))
    .map(valor =>
      valor.replace(/^(1\s.*)ões$/, "$1ão"));

  const porExtenso = preExtenso
    .map((valor, indice, array) => {
      if (array.length - 1 === indice) {
        if (valor < 100 || valor > 99 && valor % 100 === 0) {
          return `e ${valor}`;
        }
      }
      return valor;
    })
    .map((valor, indice, array) => {
      if (indice < array.length - 2) return `${valor},`;
      return valor;
    })
    .map(valor =>
      valor.replace(/^\d+/, algarismos =>
        a999(algarismos)));

  return porExtenso.join(" ");
}

module.exports = acimaMil;
