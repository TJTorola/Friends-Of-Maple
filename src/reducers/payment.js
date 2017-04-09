import {
  SET_PAYMENT_CARD_NUMBER,
  SET_PAYMENT_EXPERATION,
  SET_PAYMENT_NAME,
  SET_PAYMENT_CSV,
  SET_PAYMENT_ZIP,

  CLEAR_ERRORS,
  CLEAR_PAYMENT_ERRORS,
  SET_PAYMENT_ERRORS,
} from '~/actions/types';

export default {
  cardNumber: {
    initialValue: '',
    [SET_PAYMENT_CARD_NUMBER]: (payload) => payload,
  },

  experation: {
    initialValue: '',
    [SET_PAYMENT_EXPERATION]: (payload) => payload,
  },

  name: {
    initialValue: '',
    [SET_PAYMENT_NAME]: (payload) => payload,
  },

  csv: {
    initialValue: '',
    [SET_PAYMENT_CSV]: (payload) => payload,
  },

  zip: {
    initialValue: '',
    [SET_PAYMENT_ZIP]: (payload) => payload,
  },

  errors: {
    initialValue: {},
    [CLEAR_ERRORS]: () => ({}),
    [CLEAR_PAYMENT_ERRORS]: () => ({}),
    [SET_PAYMENT_ERRORS]: (errors) => errors,
  }
}
