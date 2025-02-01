import test from 'ava'
import Currency from '../../ts/interface/currency.interface'

test('Currency interface structure', t => {
    const currency: Currency = {
        singular: 'Dollar',
        plural: 'Dollars',
        subunit: {
            singular: 'Cent',
            plural: 'Cents',
        },
    }

    t.is(currency.singular, 'Dollar')
    t.is(currency.plural, 'Dollars')
    t.is(currency.subunit.singular, 'Cent')
    t.is(currency.subunit.plural, 'Cents')
})