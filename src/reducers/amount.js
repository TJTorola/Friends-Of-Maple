import {
  SET_AMOUNT,
} from '~/actions/types';

import { INITIAL_AMOUNT } from '~/config';

export default {
  initialValue: INITIAL_AMOUNT,

  [SET_AMOUNT]: ({ amount }) => amount,
}
