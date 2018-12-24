import test from 'ava'
import lt100 from './lt100'

test('Deve escrever números menores que cem', (t) => {
  t.is(lt100(0),  'zero')
  t.is(lt100(5),  'cinco')
  t.is(lt100(9),  'nove')
  t.is(lt100(10), 'dez')
  t.is(lt100(19), 'dezenove')
  t.is(lt100(20), 'vinte')
  t.is(lt100(90), 'noventa')
  t.is(lt100(21), 'vinte e um')
  t.is(lt100(99), 'noventa e nove')
})