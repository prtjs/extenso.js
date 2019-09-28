import lt1000 from './lt1000'
import gt1000 from './gt1000'

/**
 * Passar para o feminino alguns números.
 *
 * @method toFemale
 * @param {string} num Um número qualquer.
 * @returns {string} O número com algumas partes no feminino.
 * @example
 * toFemale('quarenta e dois')
 * // 'quarenta e duas'
 */
export const toFemale = (num) => {
  return num
    .replace(/\bum\b/, 'uma')
    .replace(/\bdois\b/, 'duas')
}

/**
 * Obter qualquer número escrito por extenso.
 *
 * @method writeInt
 * @param {string} int Um número para ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {string} [gender='m'] A opção do gênero do número.
 * @param {string} [scale='long'] A escala numérica a ser usada.
 * @returns {string} O número escrito.
 */
export default (int, locale, gender = 'm', scale = 'long') => {
  const intNum = parseInt(int)
  let num

  if (intNum < 1000) num = lt1000(intNum, locale)
  if (intNum === 1000) num = 'mil'
  if (intNum > 1000) num = gt1000(int, locale, scale)

  return gender === 'f'
    ? toFemale(num)
    : num
}