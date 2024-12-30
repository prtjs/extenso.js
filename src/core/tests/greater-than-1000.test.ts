import test from 'ava'

import writeGreaterThan1000 from '../write-decimal'

test('x', (t) => {
    t.is(writeGreaterThan1000('00000000001'), 'um centésimo de bilionésimo')
})
