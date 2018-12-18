import is from 'is'

// Deixei um em cada condição para facilitar a leitura.

const isValidNum = num => {
  if (!is.string(num)) {
    throw new Number('Must be a string')
  }

  // Verifica se é um número formatado
  if (/^\d{1,3}\d?((\.\d{3})+)?$/.test(num)) {
    return true
  }

  // Verifica se é um número decimal formatado
  if (/^\d{1,3}\d?((\.\d{3})+)?,\d+$/.test(num)) {
    return true
  }

  // Verifica se é um número não formatado
  if (/^\d+$/.test(num)) {
    return true
  }

  // Verifica se é um número decimal não formatado
  if (/^\d+,\d+/.test(num)) {
    return true
  }

  return false
}

export default isValidNum