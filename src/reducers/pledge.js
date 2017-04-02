import {
  POST_PLEGE,
} from '~/actions/types';

export default {
  processing: {
    initialValue: false,
    [POST_PLEGE]: () => true,
  }
};
