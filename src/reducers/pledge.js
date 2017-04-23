import {
  SET_PLEDGE_PROCESSING,

  SET_PLEDGE_PAYMENT_TOKEN,
  CLEAR_PLEDGE_PAYMENT_TOKEN,

  SET_PLEDGE_ID,
} from '~/actions/types';

export default {
  processing: {
    initialValue: false,
    [SET_PLEDGE_PROCESSING]: (processing) => processing,
  },

  paymentToken: {
    initialValue: '',
    [SET_PLEDGE_PAYMENT_TOKEN]: (token) => token,
    [CLEAR_PLEDGE_PAYMENT_TOKEN]: () => '',
  },

  id: {
    initialValue: '',
    [SET_PLEDGE_ID]: (id) => id,
  },
};
