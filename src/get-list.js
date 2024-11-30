/**
 * Obter lista de números menores que dez.
 *
 * @method listLt10
 * @returns {Array} Lista das partes do número.
 */
export const listLt10 = () => {
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
    'nove',
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
    'noventa',
  ]
}

/**
 * Obter lista de números menores que mil.
 *
 * @method listLt1000
 * @returns {Array} Lista das partes do número.
 */
export const listLt1000 = () => {
  return [
    'cento',
    'duzentos',
    'trezentos',
    'quatrocentos',
    'quinhentos',
    'seiscentos',
    'setecentos',
    'oitocentos',
    'novecentos',
  ]
}

/**
 * Obter lista de números maiores que mil.
 *
 * @method listGt1000
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
export const listGt1000 = (locale, scale = 'short') => {
  const baseList = [
    'mil',
    'milhões',

    // Sem o sufixo, pois ele será dinâmico
    'bil',
    'tril',
    'quatril',
    'quintil',
    'sextil',
    'septil',
    'octil',
    'nonil',
    'decil',
    'undecil',
    'duodecil',
  ]

  return baseList
    .map((value, index) => { // Resolve sufixo entre 'br' e 'pt'
      if (index < 2) return value
      const suffixes = {
        'br': 'hões',
        'pt': 'iões',
      }
      return value + suffixes[locale]
    })
    .map((value, index, array) => { // Resolve escala entre longa e curta
      if (scale === 'long') {
        if (index < 2) return value
        if (index % 2 === 0) return 'mil ' + array[index / 2]
        return array[index / 2 + 0.5]
      } else {
        return value
      }
    })
}

/**
 * Obter lista de números decimais.
 *
 * @method listDecimals
 * @returns {Array} Lista das partes do número.
 */
export const listDecimals = () => {
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
    'duodecilionésimo',
  ]
}
