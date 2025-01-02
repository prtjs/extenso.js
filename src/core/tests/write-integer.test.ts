import test from 'ava'
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

// test('writeInteger(): greater than 1000', (t) => {})