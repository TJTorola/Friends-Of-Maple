import {
  SET_NAVIGATION,
  SET_NAVIGATION_NEXT,
  SET_NAVIGATION_PREV,
} from '~/actions/types';

export const AMOUNT_PAGE = 'AMOUNT';
export const INFO_PAGE = 'INFORMATION';
export const PAYMENT_PAGE = 'PAYMENT';

const ORDER = [
  AMOUNT_PAGE,
  INFO_PAGE,
  PAYMENT_PAGE,
];

export default {
  initialValue: AMOUNT_PAGE,

  [SET_NAVIGATION]: ({ location }) => location,

  [SET_NAVIGATION_NEXT]: (_, state) => {
    const currentIdx = ORDER.indexOf(state);
    return (currentIdx < ORDER.length - 1)
      ? ORDER[currentIdx + 1]
      : state;
  },

  [SET_NAVIGATION_PREV]: (_, state) => {
    const currentIdx = ORDER.indexOf(state);
    return (currentIdx > 0)
      ? ORDER[currentIdx - 1]
      : state;
  }
}