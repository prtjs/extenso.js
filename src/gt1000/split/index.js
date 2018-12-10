/** 
 * Obs.: Essa função poderia receber um valor do tipo
 * `number`, convertê-lo com `Number.toLocaleString()`,
 * e depois usar `String.split()` para quebrar o valores.
 * No entanto, no JavaScript, números com mais de 15
 * algarismo perdem valores.
 * 
 * Certamente há uma solução melhor. Caso você a tenha,
 * abra uma 'Issue' ou envie um 'Pull Request'.
 */

const splitWith3 = val => {
  return val
    .split(/(\d{3})/g)
    .filter(Boolean)
}

const split = num => {
  switch (num.length % 3) {
    case 2:
      return [
        num.substr(0, 2),
        ...splitWith3(num.replace(/^\d{2}/, ''))
      ]
      break
    case 1:
      return [
        num.substr(0, 1),
        ...splitWith3(num.replace(/^\d{1}/, ''))
      ]
      break
    case 0:
      return splitWith3(num)
      break 
  }
}

export default split