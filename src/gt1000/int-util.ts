export const split = (int: string): string[] => {
  return [...int.match(/\d{1,3}(?=(\d{3})*$)/g) || []]
}

export const getLastNumber = (int: string): number => {
  const splitted = split(int)
  const last = splitted[splitted.length - 1]
  const integer = parseInt(last)

  return integer
}
