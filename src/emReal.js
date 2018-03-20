const eDecimal = require("./utils/eDecimal");
const separarDecimal = require("./utils/separarDecimal");
const normalizar = require("./utils/normalizar");
const maiorQueMil = require("./maiorQueMil");

function emReal(numero) {
  if (eDecimal(numero)) {
    const partes = separarDecimal(numero);
    const [parteInteira, parteDecimal] = partes;

    let extensoReal = maiorQueMil(parteInteira);
    let extensoCentavos = maiorQueMil(parteDecimal);

    extensoReal = normalizar(parteInteira) < 2
      ? extensoReal + " real"
      : extensoReal + " reais";

    extensoCentavos = normalizar(parteDecimal) < 2
      ? extensoCentavos + " centavo"
      : extensoCentavos + " centavos";

    if (parteDecimal > 99) return undefined;
    if (/^0+$/.test(parteInteira) && /^0+$/.test(parteDecimal)) return "zero real";
    if (/^0+$/.test(parteInteira)) return extensoCentavos;
    if (/^0+$/.test(parteDecimal)) return extensoReal;

    return `${extensoReal} e ${extensoCentavos}`;
  }

  if (/^0*$/.test(numero)) return "zero real";

  return normalizar(numero) < 2
    ? maiorQueMil(numero) + " real"
    : maiorQueMil(numero) + " reais";
}

module.exports = emReal;
