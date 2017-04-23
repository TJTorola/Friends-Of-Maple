import {
  SET_PLAN_ID,
} from '~/actions/types';

import { INITIAL_PLAN } from '~/config';

export default {
  initialValue: INITIAL_PLAN,

  [SET_PLAN_ID]: ({ planId }) => planId,
}
