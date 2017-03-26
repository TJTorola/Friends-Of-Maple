import {
  AMOUNT_PAGE,
  INFO_PAGE,
  PAYMENT_PAGE,
} from '~/reducers/nav';

import {
  setInformationFirstName,
  setInformationLastName,
  setInformationEmail,
  setInformationPhone,
  setInformationAddress,
  setInformationCity,
  setInformationState,
  setInformationZip,
} from '~/actions/index';

import {
  toPhone,
  toZip,
} from '~/lib/masks';

export const INFO_FORM = [
  [
    {
      field: 'firstName',
      setter: setInformationFirstName,
      getter: (state) => state.information.firstName,
      placeholder: 'First Name',
      required: true,
      cols: 6,
    },
    {
      field: 'lastName',
      setter: setInformationLastName,
      getter: (state) => state.information.lastName,
      placeholder: 'Last Name',
      required: true,
      cols: 6,
    },
  ],
  [
    {
      field: 'email',
      setter: setInformationEmail,
      getter: (state) => state.information.email,
      placeholder: 'E-Mail',
      required: true,
      cols: 8,
    },
    {
      field: 'phone',
      setter: setInformationPhone,
      getter: (state) => state.information.phone,
      mask: toPhone,
      placeholder: 'Phone Number',
      required: false,
      cols: 4,
    },
  ],
  [
    {
      field: 'address',
      setter: setInformationAddress,
      getter: (state) => state.information.address,
      placeholder: 'Address',
      required: true,
      cols: 8,
    },
    {
      field: 'zipCode',
      setter: setInformationZip,
      getter: (state) => state.information.zip,
      mask: toZip,
      placeholder: 'Zip Code',
      required: true,
      cols: 4,
    }
  ],
  [
    {
      field: 'city',
      setter: setInformationCity,
      getter: (state) => state.information.city,
      placeholder: 'City',
      required: true,
      cols: 6,
    },
    {
      field: 'state',
      setter: setInformationState,
      getter: (state) => state.information.state,
      placeholder: 'State',
      required: true,
      cols: 6,
    }
  ]
]

export const COPY = {
  BODY: {
    AMOUNT: {
      H2: 'Become a Friend of Maple',
      P: `Select a monthly pledge and become a friend of maple. Support ongoing
      operational costs and insure that Maple can continue it's mission of supporting
      community and entreprenuers in Uganda, Chile, and around the world.`,
    },
    INFO: {
      H2: 'Donor Info',
      SPAN: 'Please provide some account information.'
    },
  },
};

export const STEPS = [
  {
    nav: AMOUNT_PAGE,
    printable: 'Amount',
  },
  {
    nav: INFO_PAGE,
    printable: 'Information',
  },
  {
    nav: PAYMENT_PAGE,
    printable: 'Payment',
  },
];

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
