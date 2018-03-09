function normalizar(numero) {
  return numero
    .toString()
    .trim()
    .replace(/\./g, "");
}

module.exports = normalizar;
