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

export const INFO_FORM = {
  fields: {
    firstName: {
      id: 'firstName',
      setter: setInformationFirstName,
      getter: (state) => state.information.firstName,
      printable: 'First Name',
      rules: {
        required: 'First Name is Required',
      },
    },
    lastName: {
      id: 'lastName',
      setter: setInformationLastName,
      getter: (state) => state.information.lastName,
      printable: 'Last Name',
      rules: {
        required: 'Last Name is Required',
      },
    },
    email: {
      id: 'email',
      setter: setInformationEmail,
      getter: (state) => state.information.email,
      printable: 'E-Mail',
      rules: {
        required: 'E-Mail is Required',
      },
    },
    phone: {
      id: 'phone',
      setter: setInformationPhone,
      getter: (state) => state.information.phone,
      mask: toPhone,
      printable: 'Phone Number',
    },
    address: {
      id: 'address',
      setter: setInformationAddress,
      getter: (state) => state.information.address,
      printable: 'Address',
    },
    zipCode: {
      id: 'zipCode',
      setter: setInformationZip,
      getter: (state) => state.information.zip,
      mask: toZip,
      printable: 'Zip Code',
    },
    city: {
      id: 'city',
      setter: setInformationCity,
      getter: (state) => state.information.city,
      printable: 'City',
    },
    state: {
      id: 'state',
      setter: setInformationState,
      getter: (state) => state.information.state,
      printable: 'State',
    },
  },

  grid: [
    [{ field: 'firstName', cols: 6 }, { field: 'lastName', cols: 6 }],
    [{ field: 'email', cols: 8 }, { field: 'phone', cols: 4 }],
    [{ field: 'address', cols: 8 }, { field: 'zipCode', cols: 4 }],
    [{ field: 'city', cols: 6 }, { field: 'state', cols: 6 }],
  ],
};

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
