import test from 'ava'
import lt1000 from './lt1000'

test('Deve escrever números menores que mil', (t) => {
  t.is(lt1000(0),   'zero')
  t.is(lt1000(9),   'nove')
  t.is(lt1000(10),  'dez')
  t.is(lt1000(19),  'dezenove')
  t.is(lt1000(20),  'vinte')
  t.is(lt1000(90),  'noventa')
  t.is(lt1000(21),  'vinte e um')
  t.is(lt1000(99),  'noventa e nove')
  t.is(lt1000(100), 'cem')
  t.is(lt1000(200), 'duzentos')
  t.is(lt1000(301), 'trezentos e um')
  t.is(lt1000(410), 'quatrocentos e dez')
  t.is(lt1000(519), 'quinhentos e dezenove')
  t.is(lt1000(620), 'seiscentos e vinte')
  t.is(lt1000(790), 'setecentos e noventa')
  t.is(lt1000(821), 'oitocentos e vinte e um')
  t.is(lt1000(999), 'novecentos e noventa e nove')
})
