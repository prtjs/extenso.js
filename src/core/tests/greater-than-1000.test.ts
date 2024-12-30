import test from 'ava'

// import greaterThan1000 from '../write-greater-than-1000'
import lowerThan1000 from '../write-lower-than-1000'

test('x', (t) => {
    t.is(lowerThan1000(123), 'cento e vinte e três')
})
