import test from 'ava'
import fn from './'

test('Deve escrever a parte decimal', t => {
  t.is(fn('42'), 'quarenta e dois centésimos')
  t.is(fn('42', 'formal'), 'quarenta e dois centésimos')
  t.is(fn('42', 'informal'), 'vírgula quarenta e dois')
})