import test from 'ava'

import greaterThan1000 from './greater-than-1000'

test('x', (t) => {
    t.is(greaterThan1000('1000'), '')
})
