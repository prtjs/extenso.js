import { Currencies } from "../enums/options.enum"

export interface Currency {
  singular: string
  plural: string
  subunit: {
    singular: string
    plural: string
  }
}

const currencies: { [key in Currencies]: Currency } = {
  // Angola (official CPLP member)
  [Currencies.AOA]: {
    singular: 'kwanza',
    plural: 'kwanzas',
    subunit: {
      singular: 'cêntimo',
      plural: 'cêntimos',
    },
  },

  // Cabo Verde (official CPLP member)
  [Currencies.CVE]: {
    singular: 'escudo',
    plural: 'escudos',
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  },

  // Brasil (official CPLP member)
  [Currencies.BRL]: {
    singular: 'real',
    plural: 'reais',
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  },

  // Guiné-Bissau (official CPLP member)
  [Currencies.XOF]: {
    singular: 'franco',
    plural: 'francos',
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  },

  // Moçambique (official CPLP member)
  [Currencies.MZN]: {
    singular: 'metical',
    plural: 'meticais',
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  },

  // Portugal (official CPLP member)
  [Currencies.EUR]: {
    singular: 'euro',
    plural: 'euros',
    subunit: {
      singular: 'cêntimo',
      plural: 'cêntimos',
    },
  },

  // São Tomé e Príncipe (official CPLP member)
  [Currencies.STN]: {
    singular: 'dobra',
    plural: 'dobras',
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  },

  // Timor-Leste (official CPLP member)
  [Currencies.USD]: {
    singular: 'dólar',
    plural: 'dólares',
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  },

  // Macau (non-official CPLP member)
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
