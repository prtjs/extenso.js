/**
 * Obter lista de números menores que dez.
 *
 * @method listLt10
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
export const listLt10 = (locale) => {
  return [
    'zero',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove'
  ]
}

/**
 * Obter lista de números menores que cem.
 *
 * @method listLt100
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
export const listLt100 = (locale) => {
  return [
    'dez',
    'onze',
    'doze',
    'treze',
    ({ br: 'quatorze', pt: 'catorze' })[locale],
    'quinze',
    ({ br: 'dezesseis', pt: 'dezasseis' })[locale],
    ({ br: 'dezessete', pt: 'dezassete' })[locale],
    'dezoito',
    ({ br: 'dezenove', pt: 'dezanove' })[locale],
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sessenta',
    'setenta',
    'oitenta',
    'noventa'
  ]
}

/**
 * Obter lista de números menores que mil.
 *
 * @method listLt1000
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
export const listLt1000 = (locale) => {
  return [
    'cento',
    'duzentos',
    'trezentos',
    'quatrocentos',
    'quinhentos',
    'seiscentos',
    'setecentos',
    'oitocentos',
    'novecentos'
  ]
}

/**
 * Obter lista de números maiores que mil.
 *
 * @method listGt1000
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
export const listGt1000 = (locale) => { 
  return [
    'mil',
    'milhões',
    ({ br: 'bilhões', pt: 'biliões' })[locale],
    ({ br: 'trilhões', pt: 'triliões' })[locale],
    ({ br: 'quatrilhões', pt: 'quatriliões' })[locale],
    ({ br: 'quintilhões', pt: 'quintiliões' })[locale],
    ({ br: 'sextilhões', pt: 'sextiliões' })[locale],
    ({ br: 'septilhões', pt: 'septiliões' })[locale],
    ({ br: 'octilhões', pt: 'octiliões' })[locale],
    ({ br: 'nonilhões', pt: 'noniliões' })[locale],
    ({ br: 'decilhões', pt: 'deciliões' })[locale],
    ({ br: 'undecilhões', pt: 'undeciliões' })[locale],
    ({ br: 'duodecilhões', pt: 'duodeciliões' })[locale]
  ]
}

/**
 * Obter lista de números decimais.
 *
 * @method listDecimals
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
export const listDecimals = (locale) => {
  return [
    'milésimo',
    'milionésimo',
    'bilionésimo',
    'trilionésimo',
    'quatrilionésimo',
    'quintilionésimo',
    'sextilionésimo',
    'septilionésimo',
    'octilionésimo',
    'nonilionésimo',
    'decilionésimo',
    'undecilionésimo',
    'duodecilionésimo'
  ]
}