export const COPY = {
  BODY: {
    AMOUNT: {
      H1: 'Become a Friend of Maple',
      P: `Select a monthly pledge and become a friend of maple. Support ongoing
      operational costs and insure that Maple can continue it's mission of supporting
      community and entreprenuers in Uganda, Chile, and around the world.`,
    }
  }
}

export const PLANS = {
  'fom-10': {
    id: 'fom-10',
    amount: 10,
    printable: '$ 10',
  },
  'fom-20': {
    id: 'fom-20',
    amount: 20,
    printable: '$ 20',
  },
  'fom-50': {
    id: 'fom-50',
    amount: 50,
    printable: '$ 50',
  },
  'fom-75': {
    id: 'fom-75',
    amount: 75,
    printable: '$ 75',
  },
  'fom-100': {
    id: 'fom-100',
    amount: 100,
    printable: '$ 100',
  },
}

export const DEFAULT_PLAN = 'fom-50';
export const INITIAL_AMOUNT = PLANS[DEFAULT_PLAN].amount;

export const INCREMENTS = [
  PLANS['fom-10'],
  PLANS['fom-20'],
  PLANS['fom-50'],
  PLANS['fom-75'],
  PLANS['fom-100'],
];
