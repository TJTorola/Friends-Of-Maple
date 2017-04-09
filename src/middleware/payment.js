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

  if (hasInformationErrors || hasPaymentErrors) {
    dispatch(setPledgeProcessing(false));
    return false;
  }
  return true;
}

async function postPledge({ getState, dispatch }) {
  dispatch(setPledgeProcessing(true));

  if (!validate(getState, dispatch)) {
    return;
  };

  try {
    await getStripeToken(getState, dispatch);
    await postPlanSubscription(getState, dispatch);
  } catch (e) {
    dispatch(setPledgeProcessing(false));
    dispatch(setPledgeError(e));
    return;
  }

  dispatch(setPledgeProcessing(false));
  dispatch(setPledgeSuccess());
}

const paymentMiddleware = {
  [POST_PLEDGE]: (_, store) => postPledge(store);
}
