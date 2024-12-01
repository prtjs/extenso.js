import writeInt from '../write-int'
import { listDecimals as getList } from '../get-list'
import { getType } from './util'

export const pluralize = (val: string, count: number) => {
  return count > 1
    ? `${val}s`
    : val
}

export const writeDecimalFormal = (int: string, locale: 'br' | 'pt') => {
  // REF: https://web.archive.org/web/20180908114842/https:/www.professornews.com.br/dicas-de-redacao/5620-como-escrever-numeros-decimais-por-extenso.html

  const len = int.length
  const intNum = parseInt(int)
  const intNormalized = int.replace(/^0+/, '')
  const intText = writeInt(intNormalized, locale)
  const intType = pluralize(getType(len), intNum)
  const intTypeOf = getList()[Math.floor(len / 3 - 1)]

  if (len < 3) return `${intText} ${intType}`
  if (len % 3 === 0) return `${intText} ${pluralize(intTypeOf, intNum)}`

  return `${intText} ${intType} de ${intTypeOf}`
}

export const writeDecimalInformal = (int: string, locale: 'br' | 'pt') => {
  return `vírgula ${writeInt(int, locale)}`
}

export default (int: string, locale: 'br' | 'pt', opt?: string) => {
  return opt && opt === 'informal'
    ? writeDecimalInformal(int, locale)
    : writeDecimalFormal(int, locale)
}
