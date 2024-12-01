export const getType = (place: number): string => {
  switch (place % 3) {
  case 1:
    return 'décimo'
  case 2:
  default:
    return 'centésimo'
  }
}
