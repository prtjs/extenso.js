import formatNumber from 'format-number'

const split = strNum => {
  return formatNumber()(strNum).split(',')
}

export default split
