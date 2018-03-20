const decimais = require("./classes/decimais.json");
const separarDecimal = require("./utils/separarDecimal");
const normalizar = require("./utils/normalizar");
const maiorQueMil = require("./maiorQueMil");

function pluralizar(ePlural) {
  return ePlural ? "s" : "";
}

function obterNome(numero) {
  const tamanho = numero.length;
  const ePlural = numero > 1;

  if (tamanho === 1) return `décimo${pluralizar(ePlural)}`;
  if (tamanho === 2) return `centésimo${pluralizar(ePlural)}`

  const resto = tamanho % 3;
  const nome = decimais[tamanho - resto];

  if (resto === 0) return nome;
  if (resto === 1) return `décimo${pluralizar(ePlural)} de ${nome}`
  if (resto === 2) return `centésimo${pluralizar(ePlural)} de ${nome}`;
}

function emDecimal(numero, eFeminino) {
  const partes = separarDecimal(numero);
  const [parteInteira, parteDecimal] = partes;
  const parteDecimalNome = obterNome(parteDecimal);
  const extensoDecimalNormal = maiorQueMil(parteDecimal);
  const extensoInteira = maiorQueMil(parteInteira, eFeminino);
  const extensoDecimal = `${extensoDecimalNormal} ${parteDecimalNome}`;

  if (/^0+$/.test(parteDecimal)) return extensoInteira;
  if (/^0+$/.test(parteInteira)) return extensoDecimal;
  if (normalizar(parteInteira) > 1) return `${extensoInteira} inteiros e ${extensoDecimal}`;
  return `${extensoInteira} inteiro e ${extensoDecimal}`;
}

module.exports = emDecimal;
