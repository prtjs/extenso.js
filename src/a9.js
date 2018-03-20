const unidades = require("./classes/primeira/unidades.json");
const normalizar = require("./utils/normalizar");

function a9(numero, eFeminino) {
  numero = normalizar(numero);

  const porExtenso = unidades[numero];

  return eFeminino
    ? porExtenso.replace(/^um$/, "uma").replace(/^dois$/, "duas")
    : porExtenso;
}

module.exports = a9;
