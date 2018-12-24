import test from 'ava'
import lt10 from './lt10'

test('Deve escrever números menores que dez', (t) => {
  t.is(lt10(0), 'zero')
  t.is(lt10(5), 'cinco')
  t.is(lt10(9), 'nove')
})
