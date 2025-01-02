import test from 'ava'

import writeDigit from '../../modes/write-digit'

test('x', (t) => {
    t.is(writeDigit('89272398'), 'um centésimo de bilionésimo')
})
