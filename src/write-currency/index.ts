import allCurrencies from './currencies.ts'
import write from './write.ts'
import writeSubunit from './write-subunit.ts'

/**
 * Obter lista dos códigos ISO de um registro de moedas.
 *
 * @method getIsos
 * @param {object} currencies Objeto com registro de moedas.
 * @returns {Array} Lista com os códigos ISO.
 */
export const getIsos = (currencies) => {
  return Object.keys(currencies)
}

/**
 * Verificar se há um código ISO registrado.
 *
 * @method isValidIso
 * @param {string} iso Código ISO para ser verificado.
 * @param {object} currencies Objeto com registro de moedas.
 * @returns {boolean} Informação da existência do registro.
 */
export const isValidIso = (iso, currencies) => {
  return getIsos(currencies).includes(iso)
}

/**
 * Verificar se um número, envolvido em string, é igual a zero.
 *
 * @method isZero
 * @param {string} val Número envolvido numa string.
 * @returns {boolean} Informação do valor.
 * @example
 * isZero('00') // true
 * isZero('42') // false
 */
export const isZero = (val) => {
  return /^0+$/.test(val)
}

/**
 * Obter um valor monetário escrito por extenso.
 *
 * @method writeCurrency
 * @param {string} iso Código ISO da moeda que deverá ser usada.
 * @param {string} locale Código do país para escrever o número.
 * @param {string} [unit='0'] Valor da moeda (parte inteira).
 * @param {string} [subunit='0'] Sub-unidade do valor (parte "decimal").
 * @returns {string} Valor escrito por extenso.
 */
export default (iso, locale, unit = '0', subunit = '0', scale) => {
  if (!isValidIso(iso, allCurrencies)) {
    throw new Error('Invalid ISO code')
  }

  if (subunit.length === 1) {
    subunit = subunit + '0'
  }

  const opts = allCurrencies[iso]
  const unitText = write(unit, locale, opts, scale)
  const subunitText = writeSubunit(subunit, locale, opts)

  if (isZero(unit) && isZero(subunit)) return `zero ${opts.plural}`
  if (isZero(unit)) return subunitText
  if (isZero(subunit)) return unitText

  return `${unitText} e ${subunitText}`
}
