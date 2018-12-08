import test from 'ava'
import lt10 from '../src/lt10'

test('should write numbers less than 10', t => {
  t.is(lt10(0), 'zero')
  t.is(lt10(9), 'nove')
})