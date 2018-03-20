function eNegativo(numero) {
  return /^-/.test(numero.toString().trim());
}

module.exports = eNegativo;
