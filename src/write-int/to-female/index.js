import is from 'is'

const toFemale = num => {
  return num
    .replace(/\bum\b/, 'uma')
    .replace(/\bdois\b/, 'duas')
}

export default toFemale