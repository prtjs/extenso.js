function normalizar(numero) {
  const normal = numero
    .toString()
    .trim()
    .replace(/(\.|-)/g, "");

  if (/^0+$/.test(normal)) return "0";
  return normal.replace(/^0+/, "");
}

module.exports = normalizar;
