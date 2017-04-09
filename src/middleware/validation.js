import { INFO_FORM } from '~/config';
import { VALIDATE_INFORMATION } from '~/actions/types';
import {
  setInformationErrors,
  clearInformationErrors,
  setNavigation,
} from '~/actions/index';
import {
  INFO_PAGE,
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
  }
}
