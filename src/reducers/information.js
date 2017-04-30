import {
  CLEAR_INFORMATION,

  SET_INFORMATION_FIRST_NAME,
  SET_INFORMATION_LAST_NAME,
  SET_INFORMATION_EMAIL,
  SET_INFORMATION_PHONE,
  SET_INFORMATION_ADDRESS,
  SET_INFORMATION_CITY,
  SET_INFORMATION_STATE,
  SET_INFORMATION_ZIP,
  SET_INFORMATION_COUNTRY,

  CLEAR_ERRORS,
  CLEAR_INFORMATION_ERRORS,
  SET_INFORMATION_ERRORS,
} from '~/actions/types';

export default {
  firstName: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_FIRST_NAME]: (value) => value,
  },

  lastName: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_LAST_NAME]: (value) => value,
  },

  email: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_EMAIL]: (value) => value,
  },

  phone: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_PHONE]: (value) => value,
  },

  address: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_ADDRESS]: (value) => value,
  },

  country: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_COUNTRY]: (value) => value,
  },

  city: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_CITY]: (value) => value,
  },

  state: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_STATE]: (value) => value,
  },

  zip: {
    initialValue: '',
    [CLEAR_INFORMATION]: () => '',
    [SET_INFORMATION_ZIP]: (value) => value,
  },

  errors: {
    initialValue: {},
    [CLEAR_ERRORS]: () => ({}),
    [CLEAR_INFORMATION_ERRORS]: () => ({}),
    [CLEAR_INFORMATION]: () => ({}),
    [SET_INFORMATION_ERRORS]: (errors) => errors,
  }
}
