import test from 'ava'
import lt10 from './lt10'

test('Deve escrever números menores que dez', (t) => {
  t.is(lt10(0, 'br'), 'zero')
  t.is(lt10(5, 'br'), 'cinco')
  t.is(lt10(9, 'pt'), 'nove')
})
