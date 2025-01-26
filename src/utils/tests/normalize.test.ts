import test from 'ava'
import normalize from '../normalize'

test('normalize(): should handle numbers', (t) => {
    t.is(normalize(0), '0')
    t.is(normalize(1), '1')
    t.is(normalize(-1), '-1')
    t.is(normalize(1.5), '1.5')
    t.is(normalize(-1.5), '-1.5')
})

test('normalize(): should handle strings', (t) => {
    t.is(normalize('0'), '0')
    t.is(normalize('1'), '1')
    t.is(normalize('-1'), '-1')
    t.is(normalize('1.5'), '1.5')
    t.is(normalize('-1.5'), '-1.5')
    t.is(normalize('  1.5  '), '1.5')
})

test('normalize(): should handle bigint', (t) => {
    t.is(normalize(BigInt('0')), '0')
    t.is(normalize(BigInt('1')), '1')
    t.is(normalize(BigInt('-1')), '-1')
    t.is(normalize(0n), '0')
    t.is(normalize(1n), '1')
    t.is(normalize(-1n), '-1')
})

test('normalize(): should throw on invalid type', (t) => {
    // @ts-ignore
    t.throws(() => normalize(null))
    // @ts-ignore
    t.throws(() => normalize(undefined))
    // @ts-ignore
    t.throws(() => normalize({}))
    // @ts-ignore
    t.throws(() => normalize([]))
})
