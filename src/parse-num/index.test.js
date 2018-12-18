import test from 'ava'
import fn from './'

test('Deve fazer um análise do número', t => {
  t.deepEqual(fn('123'), { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(fn('-123'), { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(fn('123,42'), { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(fn('-42.000,42'), { isNegative: true, integer: '42000', decimal: '42' })
})