export const listLt10 = (): string[] => {
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

export const listLt100 = (locale: 'br' | 'pt'): string[] => {
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

export const listLt1000 = (): string[] => {
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

export const listGt1000 = (locale: 'br' | 'pt', scale: string = 'short'): string[] => {
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

export const listDecimals = (): string[] => {
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
