import lt1000 from './lt1000'
import gt1000 from './gt1000'

export const toFemale = (num: string) => {
  return num
    .replace(/\bum\b/, 'uma')
    .replace(/\bdois\b/, 'duas')
}

export default (int: string, locale: 'br' | 'pt', gender = 'm', scale = 'short') => {
  const intNum = parseInt(int)
  let num = ''

  if (intNum < 1000) num = lt1000(intNum, locale)
  if (intNum === 1000) num = 'mil'
  if (intNum > 1000) num = gt1000(int, locale, scale)

  return gender === 'f'
    ? toFemale(num)
    : num
}
