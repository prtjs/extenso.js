import test from 'ava'

import writeDecimal from '../write-decimal'

test('x', (t) => {
    t.is(writeDecimal('00000000001'), 'um centésimo de bilionésimo')
})
