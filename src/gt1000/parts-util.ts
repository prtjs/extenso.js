import { getLastNumber } from './int-util'
import { listGt1000 as getList } from '../get-list'
// import lt1000 from '../lt1000'

export const write = (parts: string[], locale: 'br' | 'pt'): string[] => {
  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      const int = parseInt(digit)

      // return lt1000(int, locale)
      return ''
    })
  })
}
