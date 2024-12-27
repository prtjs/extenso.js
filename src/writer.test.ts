// import test from 'ava'
// import Writer from './writer'
// import WriterCurrency from './writer-currency'
// import WriterNumber from './writer-number'
// import { Currencies } from './enums/options.enum'

// test('writer', (t) => {
//     const writer = new Writer('10001,1')

//     t.is(writer.toText(writer.integerNumber), 'dez mil e um')
//     t.is(writer.decimalNumber, '1')
// })

// test('writer-currency', (t) => {
//     const writer = new WriterCurrency('1000,00')

//     writer.setCode(Currencies.BRL)

//     t.is(writer.write(), 'mil reais')
// })

// test('writer-number', (t) => {
//     const writer = new WriterNumber('1000,0012312')

//     t.is(writer.formalizeDecimal(), 'doze mil trezentos e doze centéssimos de milésimo')
// })