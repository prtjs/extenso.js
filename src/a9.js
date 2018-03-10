const unidades = require("./classes/primeira/unidades.json");
const eValido = require("./utils/eValido.js");
const normalizar = require("./utils/normalizar.js");

function a9(numero, eFeminino) {
  if (!eValido(numero)) return NaN;
  numero = normalizar(numero);

  const porExtenso = unidades[numero];

  return eFeminino
    ? porExtenso.replace(/^um$/, "uma").replace(/^dois$/, "duas")
    : porExtenso;
}

module.exports = a9;
