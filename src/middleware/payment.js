import { get } from 'axios';

import {
  setPledgeProcessing,
  validateInformation,
  validatePayment,
  setPledgePaymentToken,
} from '~/actions/index';
import {
  POST_PLEDGE,
} from '~/actions/types';
import {
  createCardToken,
} from '~/lib/stripe';

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
    console.error(e);
    // dispatch(setPledgeError(e));
    unblockUser();
    return;
  }

  unblockUser();
  // dispatch(setPledgeSuccess());
}

const validate = (getState, dispatch) => {
  dispatch(validateInformation());
  dispatch(validatePayment());

  const { information, payment } = getState();
  const hasInformationErrors = Object.keys(information.errors).length > 0;
  const hasPaymentErrors = Object.keys(payment.errors).length > 0;

  return !hasInformationErrors && !hasPaymentErrors;
}

async function getStripeToken(getState, dispatch) {
  const {
    payment: {
      cardNumber,
      experation,
      name,
      csv,
      zip,
    },
  } = getState();
  const [expMonth, expYear] = experation.split('/').map(str => parseInt(str));

  const response = await createCardToken({
    name: name,
    number: cardNumber,
    cvc: csv,
    exp_month: expMonth,
    exp_year: expYear,
    address_zip: zip,
  });
  const token = response.id;

  dispatch(setPledgePaymentToken(token));
}

async function postPlanSubscription(getState, dispatch) {
  const {
    pledge: { token },
    amount,
  } = getState();

  const response = await get('https://vgi5mhxvwd.execute-api.us-east-1.amazonaws.com/dev/hello');
  console.log(response);
}

export default {
  [POST_PLEDGE]: (_, store) => postPledge(store),
}
