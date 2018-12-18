import test from 'ava'
import fn from './'

fn('Deve passar os números para o feminino', t => {
  t.is(fn('vinte e um'), 'vinte e uma')
  t.is(fn('quarenta e dois'), 'quarenta e duas')
}) 