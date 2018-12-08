import test from 'ava'
import lt100 from '../src/lt100'

test('should write numbers less than 100', t => {
  t.is(lt100(0), 'zero')
  t.is(lt100(9), 'nove')
  t.is(lt100(10), 'dez')
  t.is(lt100(19), 'dezenove')
  t.is(lt100(20), 'vinte')
  t.is(lt100(90), 'noventa')
  t.is(lt100(21), 'vinte e um')
  t.is(lt100(99), 'noventa e nove')
})