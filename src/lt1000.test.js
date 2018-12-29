import test from 'ava'
import lt1000 from './lt1000'

test('Deve escrever números menores que mil', (t) => {
  t.is(lt1000(0, 'br'),   'zero')
  t.is(lt1000(9, 'br'),   'nove')
  t.is(lt1000(10, 'br'),  'dez')
  t.is(lt1000(19, 'br'),  'dezenove')
  t.is(lt1000(19, 'pt'),  'dezanove')
  t.is(lt1000(20, 'br'),  'vinte')
  t.is(lt1000(90, 'br'),  'noventa')
  t.is(lt1000(21, 'br'),  'vinte e um')
  t.is(lt1000(99, 'br'),  'noventa e nove')
  t.is(lt1000(100, 'br'), 'cem')
  t.is(lt1000(200, 'br'), 'duzentos')
  t.is(lt1000(301, 'br'), 'trezentos e um')
  t.is(lt1000(410, 'br'), 'quatrocentos e dez')
  t.is(lt1000(519, 'br'), 'quinhentos e dezenove')
  t.is(lt1000(519, 'pt'), 'quinhentos e dezanove')
  t.is(lt1000(620, 'br'), 'seiscentos e vinte')
  t.is(lt1000(790, 'br'), 'setecentos e noventa')
  t.is(lt1000(821, 'br'), 'oitocentos e vinte e um')
  t.is(lt1000(999, 'br'), 'novecentos e noventa e nove')
})
