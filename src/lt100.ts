import lt10 from './lt10'
import { listLt100 as getList } from './get-list'

export default (int: number, locale: 'br' | 'pt'): string => {
  if (int < 10) return lt10(int)
  if (int < 20) return getList(locale)[int - 10]

  const unit = lt10(int % 10)
  const ten = getList(locale)[(int - int % 10) / 10 + 8]

  return unit !== 'zero'
    ? `${ten} e ${unit}`
    : ten
}
