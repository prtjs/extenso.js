import split from '../split'

const getLastNum = val => {
  return parseInt(split(val)[split(val).length - 1])
}

export default getLastNum