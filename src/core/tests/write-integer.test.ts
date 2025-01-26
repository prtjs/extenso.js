import test from 'ava'
import Scales from '../../ts/enum/scales.enum'
import writeInteger from '../write-integer'

test('writeInteger(): lower than 1000', (t) => {
    t.is(writeInteger('1'), 'um')
    t.is(writeInteger('2'), 'dois')
    t.is(writeInteger('10'), 'dez')
    t.is(writeInteger('15'), 'quinze')
    t.is(writeInteger('30'), 'trinta')
    t.is(writeInteger('35'), 'trinta e cinco')
    t.is(writeInteger('100'), 'cem')
    t.is(writeInteger('101'), 'cento e um')
    t.is(writeInteger('110'), 'cento e dez')
    t.is(writeInteger('135'), 'cento e trinta e cinco')
})

test('writeInteger(): greater than 1000 and short scale', (t) => {
    t.is(writeInteger('1000'), 'mil')
    t.is(writeInteger('1001'), 'mil e um')
    t.is(writeInteger('2000'), 'dois mil')
    t.is(writeInteger('2002'), 'dois mil e dois')
    t.is(writeInteger('10500'), 'dez mil e quinhentos')
    t.is(writeInteger('10520'), 'dez mil quinhentos e vinte')
    t.is(writeInteger('1000000'), 'um milhão')
    t.is(writeInteger('1000001'), 'um milhão e um')
    t.is(writeInteger('2000000'), 'dois milhões')
    t.is(writeInteger('2000002'), 'dois milhões e dois')
    t.is(writeInteger('2150000001'), 'dois bilhões, cento e cinquenta milhões e um')
    t.is(writeInteger('2150200050'), 'dois bilhões, cento e cinquenta milhões, duzentos mil e cinquenta')
    t.is(writeInteger('1000000000000'), 'um trilhão')
    t.is(writeInteger('1000000000001'), 'um trilhão e um')
    t.is(writeInteger('2000000000002'), 'dois trilhões e dois')
})

test('writeInteger(): greater than 1000 and long scale', (t) => {
    t.is(writeInteger('1000', Scales.LONG), 'mil')
    t.is(writeInteger('1001', Scales.LONG), 'mil e um')
    t.is(writeInteger('2000', Scales.LONG), 'dois mil')
    t.is(writeInteger('2002', Scales.LONG), 'dois mil e dois')
    t.is(writeInteger('10500', Scales.LONG), 'dez mil e quinhentos')
    t.is(writeInteger('10520', Scales.LONG), 'dez mil quinhentos e vinte')
    t.is(writeInteger('1000000', Scales.LONG), 'um milhão')
    t.is(writeInteger('1000001', Scales.LONG), 'um milhão e um')
    t.is(writeInteger('2000000', Scales.LONG), 'dois milhões')
    t.is(writeInteger('2000002', Scales.LONG), 'dois milhões e dois')
    t.is(writeInteger('2150000001', Scales.LONG), 'dois mil milhões, cento e cinquenta milhões e um')
    t.is(writeInteger('2150200050', Scales.LONG), 'dois mil milhões, cento e cinquenta milhões, duzentos mil e cinquenta')
    t.is(writeInteger('1000000000000', Scales.LONG), 'um bilhão')
    t.is(writeInteger('1000000000001', Scales.LONG), 'um bilhão e um')
    t.is(writeInteger('2000000000002', Scales.LONG), 'dois bilhões e dois')
})
