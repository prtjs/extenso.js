import test from 'ava'

import writeDigits from '../write-digit'

test('x', (t) => {
    t.is(writeDigits('89272398'), 'um centésimo de bilionésimo')
})
