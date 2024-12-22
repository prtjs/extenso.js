import test from 'ava'
import Writer from './writer'
import WriterCurrency from './writer-currency'
import { Currencies } from './enums/options.enum'

test('writer', (t) => {
    const writer = new Writer('10001,1')

    t.is(writer.writeInteger(), 'dez mil e um')
    t.is(writer.decimal, '1')
})


test('writer-currency', (t) => {
    const writer = new WriterCurrency('1000,00')

    writer.setCode(Currencies.BRL)

    t.is(writer.write(), 'mil reais')
})