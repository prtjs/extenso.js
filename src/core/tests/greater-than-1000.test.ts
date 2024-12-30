import test from 'ava'

import writeAll from '../write-all'

test('x', (t) => {
    t.is(writeAll('10002233445591'), 'um centésimo de bilionésimo')
})
