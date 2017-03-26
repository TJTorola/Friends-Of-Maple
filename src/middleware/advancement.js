import { INFO_FORM } from '~/config';
import { ADVANCE_TO_PAYMENT } from '~/actions/types';
import {
  setInformationErrors,
  clearInformationErrors,
  setNavigationNext,
} from '~/actions/index';
import { testForm } from '~/lib/form';

export default {
  [ADVANCE_TO_PAYMENT]: (_, { getState, dispatch }) => {
    const { information } = getState();
    const errors = testForm(information, INFO_FORM.fields);
    if (Object.keys(errors).length > 0) {
      dispatch(setInformationErrors(errors));
    } else {
      dispatch(clearInformationErrors());
      dispatch(setNavigationNext());
    }
  }
}
