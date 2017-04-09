import {
  setPledgeProcessing,
  validateInformation,
  validatePayment,
} from '~/actions/index';
import {
  POST_PLEDGE,
} from '~/actions/types';

const validate = (getState, dispatch) = {
  dispatch(validateInformation());
  dispatch(validatePayment());

  const { information, payment } = getState();
  const hasInformationErrors = Object.keys(information.errors).length > 0;
  const hasPaymentErrors = Object.keys(payment.errors).length > 0;

  return !hasInformationErrors && !hasPaymentErrors;
}

async function postPledge({ getState, dispatch }) {
  const blockUser = () => dispatch(setPledgeProcessing(true));
  const unblockUser = () => dispatch(setPledgeProcessing(false));

  blockUser();

  if (!validate(getState, dispatch)) {
    unblockUser();
    return;
  };

  try {
    await getStripeToken(getState, dispatch);
    await postPlanSubscription(getState, dispatch);
  } catch (e) {
    unblockUser();
    dispatch(setPledgeError(e));
    return;
  }

  unblockUser();
  dispatch(setPledgeSuccess());
}

const paymentMiddleware = {
  [POST_PLEDGE]: (_, store) => postPledge(store);
}
