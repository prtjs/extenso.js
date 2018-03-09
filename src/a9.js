const unidades = require("./classes/primeira/unidades.json");
const eValido = require("./utils/eValido.js");
const normalizar = require("./utils/normalizar.js");

function a9(numero) {
  if (!eValido(numero)) return NaN;
  numero = normalizar(numero);

  return unidades[numero];
}

module.exports = a9;
