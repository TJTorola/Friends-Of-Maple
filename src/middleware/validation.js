import {
  VALIDATE_INFORMATION,
  VALIDATE_PAYMENT,
} from '~/actions/types';
import {
  setInformationErrors,
  clearInformationErrors,
  setPaymentErrors,
  clearPaymentErrors,
  setNavigation,
} from '~/actions/index';

import {
  INFO_FORM,
  PAYMENT_FORM,
} from '~/config';
import {
  INFO_PAGE,
  PAYMENT_PAGE,
} from '~/reducers/nav';
import { testForm } from '~/lib/form';

export default {
  [VALIDATE_INFORMATION]: (_, { getState, dispatch }) => {
    const { information } = getState();
    const errors = testForm(information, INFO_FORM.fields);
    if (Object.keys(errors).length > 0) {
      dispatch(setInformationErrors(errors));
      dispatch(setNavigation(INFO_PAGE));
    } else {
      dispatch(clearInformationErrors());
    }
  },

  [VALIDATE_PAYMENT]: (_, { getState, dispatch }) => {
    const { payment } = getState();
    const errors = testForm(payment, PAYMENT_FORM.fields);
    if (Object.keys(errors).length > 0) {
      dispatch(setPaymentErrors(errors));
      dispatch(setNavigation(PAYMENT_PAGE));
    } else {
      dispatch(clearPaymentErrors());
    }
  },
}
