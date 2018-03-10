function normalizar(numero) {
  return numero
    .toString()
    .trim()
    .replace(/^0+/, "")
    .replace(/\./g, "");
}

module.exports = normalizar;
