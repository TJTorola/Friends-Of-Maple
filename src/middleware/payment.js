import {
  POST_PLEDGE,
} from '~/actions/types';

const paymentMiddleware = store => next => action => {
  switch (action.type) {
    case POST_PLEDGE:

      break;
    default:

  }
}
