import test from 'ava'
import split from '../split'

test('split(): should split string into groups of 3', (t) => {
    t.deepEqual(split('123456789012'), [123, 456, 789, 12])
    t.deepEqual(split('987654321098'), [987, 654, 321, 98])
    t.deepEqual(split('123456789'), [123, 456, 789])
    t.deepEqual(split('987654321'), [987, 654, 321])
    t.deepEqual(split('12345678'), [12, 345, 678])
    t.deepEqual(split('98765432'), [98, 765, 432])
})

test('split(): should handle empty string', (t) => {
    t.deepEqual(split(''), [])
})

test('split(): should handle string with leading zeros', (t) => {
    t.deepEqual(split('000123'), [0, 123])
    t.deepEqual(split('0.001.234'), [0, 1, 234])
})
