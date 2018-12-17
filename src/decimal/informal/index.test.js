import test from 'ava'
import fn from './'

test('Deve escrever a parte decimal de modo informal', t => {
  t.is(fn('42'), 'vírgula quarenta e dois')
})