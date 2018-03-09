function separarClasses(numero) {

  // Porderia ser usado `Number.toLocaleString`,
  // mas para isso o número deveria ser tratado como
  // `Number` e não retornaria um valor desejado quando
  // um número com mais de 16 algarismos fosse passado.
  return numero
    .split("")
    .reverse()
    .join("")
    .split(/(\d{3})/)
    .filter(valor => valor)
    .map(valor =>
        valor
          .split("")
          .reverse()
          .join(""))
    .reverse();
}

module.exports = separarClasses;
