const a999 = require("./a999");
const eNegativo = require("./utils/eNegativo");
const normalizar = require("./utils/normalizar");
const separarClasses = require("./utils/separarClasses");
const classesRestantes = require("./classes/restantes.json");

function acimaMil(numero, eFeminino) {
  const normalizado = normalizar(numero);

  if (normalizado < 1000) return a999(normalizado, eFeminino);

  const separados = separarClasses(normalizado);
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
      valor.replace(/^(1\s.*)ões$/, "$1ão"))
    .map(valor =>
      valor.replace(/^1\smil\b/, "mil"));

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
      valor.replace(/\d+/, algarismos =>
        a999(algarismos, eFeminino)))
    .join(" ");

  return porExtenso;
}

module.exports = acimaMil;
