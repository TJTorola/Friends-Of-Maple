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
  setInformationCountry,

  setPaymentCardNumber,
  setPaymentExpiration,
  setPaymentName,
  setPaymentCsv,
  setPaymentZip,
} from '~/actions/index';

import {
  toPhone,
  toZip,
  toCardNumber,
  toExpiration,
  toCsc,
} from '~/lib/masks';

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
    expiration: {
      id: 'expiration',
      setter: setPaymentExpiration,
      getter: (state) => state.payment.expiration,
      errors: (state) => state.payment.errors.expiration,
      printable: 'Expiration (mm/dd)',
      mask: toExpiration,
      rules: {
        validCCExp: 'A Valid Expiration Date is Required',
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
      { field: 'expiration', cols: 3 },
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
    country: {
      id: 'country',
      setter: setInformationCountry,
      getter: (state) => state.information.country,
      errors: (state) => state.information.errors.country,
      printable: 'Country',
    },
    state: {
      id: 'state',
      setter: setInformationState,
      getter: (state) => state.information.state,
      errors: (state) => state.information.errors.state,
      printable: 'State',
    },
    city: {
      id: 'city',
      setter: setInformationCity,
      getter: (state) => state.information.city,
      errors: (state) => state.information.errors.city,
      printable: 'City',
    },
  },

  grid: [
    [
      { field: 'firstName', cols: 6 },
      { field: 'lastName', cols: 6 },
    ], [
      { field: 'email', cols: 8 },
      { field: 'phone', cols: 4 },
    ], [
      { field: 'address', cols: 8 },
      { field: 'zipCode', cols: 4 },
    ], [
      { field: 'country', cols: 4 },
      { field: 'state', cols: 4 },
      { field: 'city', cols: 4 }
    ],
  ],
};

export const COPY = {
  HEADER: {
    H1: 'Friends of Maple',
  },
  BODY: {
    AMOUNT: {
      H2: 'Join the Many Friends of MAPLE, Donate Monthly',
      P: `Select a monthly pledge through our secure site. Support
      ongoing operational costs to ensure that MAPLE can continue its
      mission of supporting community-managed development and entrepreneurs in
      Uganda, Chile, and around the world. MAPLE coordinates special updates,
      photos, videos, events, gifts, connections to the field, conversations,
      and other opportunities tailored to the interests of monthly donors.`,
    },
    INFO: {
      H2: 'Donor Info',
      SPAN: 'Please provide some account information.'
    },
    PAYMENT: {
      H2: 'Payment Info',
    },
    PLEDGED: {
      H1: 'Thank you so much!',
      P: `Your ongoing support is what makes MAPLE's work possible. Your
      donations are 100% tax deductible, and we'll send you an email receipt
      each month. Please contact us at info@maplemicro.org to manage or cancel
      your recurring donation. Welcome to our circle of Friends - we are so glad
      to have you!`,
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
  'fom-25': {
    id: 'fom-25',
    amount: 25,
    printable: '$ 25',
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
  'fom-200': {
    id: 'fom-200',
    amount: 200,
    printable: '$ 200',
  },
}

export const INITIAL_PLAN = 'fom-50';

export const INCREMENTS = Object
  .keys(PLANS)
  .map(key => PLANS[key])
  .sort((l, r) => l.amount < r.amount ? -1 : 1);
