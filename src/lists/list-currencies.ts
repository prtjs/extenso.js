import Currencies from '../ts/currencies.enum'
import Currency from '../ts/currency.interface'

const currencies: Record<Currencies, Currency> = {
    [Currencies.AOA]: {
        singular: 'kwanza',
        plural: 'kwanzas',
        subunit: {
            singular: 'cêntimo',
            plural: 'cêntimos',
        },
    },
    [Currencies.CVE]: {
        singular: 'escudo',
        plural: 'escudos',
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    },
    [Currencies.BRL]: {
        singular: 'real',
        plural: 'reais',
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    },
    [Currencies.XOF]: {
        singular: 'franco',
        plural: 'francos',
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    },
    [Currencies.MZN]: {
        singular: 'metical',
        plural: 'meticais',
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    },
    [Currencies.EUR]: {
        singular: 'euro',
        plural: 'euros',
        subunit: {
            singular: 'cêntimo',
            plural: 'cêntimos',
        },
    },
    [Currencies.STN]: {
        singular: 'dobra',
        plural: 'dobras',
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    },
    [Currencies.USD]: {
        singular: 'dólar',
        plural: 'dólares',
        subunit: {
            singular: 'centavo',
            plural: 'centavos',
        },
    },
    [Currencies.MOP]: {
        singular: 'pataca',
        plural: 'patacas',
        subunit: {
            singular: 'avos',
            plural: 'avos',
        },
    },
}

export default currencies
