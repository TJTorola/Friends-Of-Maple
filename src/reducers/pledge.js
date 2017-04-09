import {
  SET_PLEDGE_PROCESSING,
} from '~/actions/types';

export default {
  processing: {
    initialValue: false,
    [SET_PLEDGE_PROCESSING]: (processing) => processing,
  }
};
