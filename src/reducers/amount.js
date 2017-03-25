import {
  SET_AMOUNT,
} from '~/actions/types';

export default {
  initialValue: 10,

  [SET_AMOUNT]: ({ amount }) => amount,
}
