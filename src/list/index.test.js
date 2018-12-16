import test from 'ava'
import is from 'is'
import * as obj from './'

test('Devem ser arrays de strings', t => {
  t.true(is.array(obj.lt10))
  t.true(is.array(obj.lt100))
  t.true(is.array(obj.lt1000))
  t.true(is.array(obj.gt1000))

  t.true(obj.lt10.every(is.string))
  t.true(obj.lt100.every(is.string))
  t.true(obj.lt1000.every(is.string))
  t.true(obj.gt1000.every(is.string))
})

test('Deve ser um objeto com propriedades divisíveis por 3', t => {
  t.true(Object.keys(obj.decimals).map(Number).every(val => is.divisibleBy(val, 3)))
})

test('Devem ter strings apenas com palavras', t => {
  obj.lt10.every(val => t.regex(val, /^[a-zõé]+$/))
  obj.lt100.every(val => t.regex(val, /^[a-zõé]+$/))
  obj.lt1000.every(val => t.regex(val, /^[a-zõé]+$/))
  obj.gt1000.every(val => t.regex(val, /^[a-zõé]+$/))
  Object.values(obj.decimals).every(val => t.regex(val, /^[a-zõé]+$/))
})

test('Devem ter sufixos válidos', t => {
  obj.lt1000.every(val => t.regex(val, /^cento$|centos$/))
  obj.gt1000.every(val => t.regex(val, /^mil$|ilhões$/))
  Object.values(obj.decimals).every(val => t.regex(val, /ésimo$/))
})
