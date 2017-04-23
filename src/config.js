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

  setPaymentCardNumber,
  setPaymentExperation,
  setPaymentName,
  setPaymentCsv,
  setPaymentZip,
} from '~/actions/index';

import {
  toPhone,
  toZip,
  toCardNumber,
  toExperation,
  toCsc,
} from '~/lib/masks';

export const KEYS = {
  stripe: 'pk_test_1mpUmvYGwBprD3L9QvyzdDg5',
};

export const PAYMENT_FORM = {
  fields: {
    cardNumber: {
      id: 'cardNumber',
      setter: setPaymentCardNumber,
      getter: (state) => state.payment.cardNumber,
      errors: (state) => state.payment.errors.cardNumber,
      printable: 'Card Number',
      mask: toCardNumber,
      rules: {
        validCCNum: 'A Valid Card Number is Required',
      },
    },
    experation: {
      id: 'experation',
      setter: setPaymentExperation,
      getter: (state) => state.payment.experation,
      errors: (state) => state.payment.errors.experation,
      printable: 'Experation',
      mask: toExperation,
      rules: {
        validCCExp: 'A Valid Experation Date is Required',
      },
    },
    name: {
      id: 'name',
      setter: setPaymentName,
      getter: (state) => state.payment.name,
      errors: (state) => state.payment.errors.name,
      printable: 'Name on Card',
      rules: {
        required: 'Name is Required',
      },
    },
    csv: {
      id: 'csv',
      setter: setPaymentCsv,
      getter: (state) => state.payment.csv,
      errors: (state) => state.payment.errors.csv,
      printable: 'Security Code',
      mask: toCsc,
      rules: {
        validCCCVC: 'A Valid Security Code is Required',
      },
    },
    zip: {
      id: 'zip',
      setter: setPaymentZip,
      getter: (state) => state.payment.zip,
      errors: (state) => state.payment.errors.zip,
      printable: 'Billing Zip Code',
      rules: {
        required: 'Billing Zip Code is Required',
      },
    },
  },

  grid: [
    [{ field: 'name', cols: 8 }, { field: 'zip', cols: 4 }],
    [
      { field: 'cardNumber', cols: 6 },
      { field: 'experation', cols: 3 },
      { field: 'csv', cols: 3 },
    ],
  ],
}

export const INFO_FORM = {
  fields: {
    firstName: {
      id: 'firstName',
      setter: setInformationFirstName,
      getter: (state) => state.information.firstName,
      errors: (state) => state.information.errors.firstName,
      printable: 'First Name',
      rules: {
        required: 'First Name is Required',
      },
    },
    lastName: {
      id: 'lastName',
      setter: setInformationLastName,
      getter: (state) => state.information.lastName,
      errors: (state) => state.information.errors.lastName,
      printable: 'Last Name',
      rules: {
        required: 'Last Name is Required',
      },
    },
    email: {
      id: 'email',
      setter: setInformationEmail,
      getter: (state) => state.information.email,
      errors: (state) => state.information.errors.email,
      printable: 'E-Mail',
      rules: {
        required: 'E-Mail is Required',
      },
    },
    phone: {
      id: 'phone',
      setter: setInformationPhone,
      getter: (state) => state.information.phone,
      errors: (state) => state.information.errors.phone,
      mask: toPhone,
      printable: 'Phone Number',
    },
    address: {
      id: 'address',
      setter: setInformationAddress,
      getter: (state) => state.information.address,
      errors: (state) => state.information.errors.address,
      printable: 'Address',
    },
    zipCode: {
      id: 'zipCode',
      setter: setInformationZip,
      getter: (state) => state.information.zip,
      errors: (state) => state.information.errors.zip,
      mask: toZip,
      printable: 'Zip Code',
    },
    city: {
      id: 'city',
      setter: setInformationCity,
      getter: (state) => state.information.city,
      errors: (state) => state.information.errors.city,
      printable: 'City',
    },
    state: {
      id: 'state',
      setter: setInformationState,
      getter: (state) => state.information.state,
      errors: (state) => state.information.errors.state,
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
  HEADER: {
    H1: 'Friends of Maple',
  },
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
    PAYMENT: {
      H2: 'Donor:',
    },
    PLEDGED: {
      H1: 'Thank you so much!',
      P: `Your donation is what allows us to keep working. Please contact us anytime
      to manage or cancel your pledge.`,
      A: 'Return to Maple',
    }
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

export const INITIAL_PLAN = 'fom-50';

export const INCREMENTS = [
  PLANS['fom-10'],
  PLANS['fom-20'],
  PLANS['fom-50'],
  PLANS['fom-75'],
  PLANS['fom-100'],
];
