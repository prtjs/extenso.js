function ehValido(numero) {
  const re =/^(((\d|\d{2}|\d{3}))((.\d{3})+)?|\d+)$/;

  return re.test(numero.toString().trim());
}

module.exports = ehValido;
