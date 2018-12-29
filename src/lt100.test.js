import test from 'ava'
import lt100 from './lt100'

test('Deve escrever números menores que cem', (t) => {
  t.is(lt100(0, 'br'),  'zero')
  t.is(lt100(5, 'br'),  'cinco')
  t.is(lt100(9, 'br'),  'nove')
  t.is(lt100(10, 'br'), 'dez')
  t.is(lt100(14, 'br'), 'quatorze')
  t.is(lt100(19, 'br'), 'dezenove')
  t.is(lt100(20, 'br'), 'vinte')
  t.is(lt100(90, 'br'), 'noventa')
  t.is(lt100(21, 'br'), 'vinte e um')
  t.is(lt100(99, 'br'), 'noventa e nove')
  t.is(lt100(14, 'pt'), 'catorze')
  t.is(lt100(19, 'pt'), 'dezanove')
})