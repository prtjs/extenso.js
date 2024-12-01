import { listLt10 as getList } from './get-list'

export default (int: number) => {
  return getList()[int]
}
