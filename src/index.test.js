import test from 'ava'
import extenso from './'

test('Deve escrever qualquer número por extenso', (t) => {
  t.is(extenso('1'), 'um')
  t.is(extenso('2'), 'dois')
  t.is(extenso('42'), 'quarenta e dois')
  t.is(extenso('0,14'), 'quatorze centésimos')
  t.is(extenso('1,14'), 'um inteiro e quatorze centésimos')
  t.is(extenso('3,14'), 'três inteiros e quatorze centésimos')
  t.is(extenso('1', { number: { gender: 'm' } }), 'um')
  t.is(extenso('1', { number: { gender: 'f' } }), 'uma')
})