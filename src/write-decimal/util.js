/**
 * Obter a informação do tipo da casa decimal (décimo ou centésimo).
 *
 * @method getType
 * @param {number} place O número de casas do valor decimal.
 * @returns {string} Informação do tipo da casa.
 */
export const getType = (place) => {
  switch (place % 3) {
    case 1:
      return 'décimo'
      break
    case 2:
      return 'centésimo'
      break
  }
}