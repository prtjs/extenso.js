import test from 'ava'
import fn from './'

test('Deve escrever o restante dos números', t => {
  t.deepEqual(fn([ '3 mil,', '140' ]), [ 'três mil,', 'cento e quarenta' ])
  t.deepEqual(fn([ '3 mil e', '14' ]), [ 'três mil e', 'quatorze' ])
  t.deepEqual(fn([ '3 mil e', '1' ]), [ 'três mil e', 'um' ])
  t.deepEqual(fn([ 'mil e', '1' ]), [ 'mil e', 'um' ])
})