import { createAction } from '~/lib/redux';

import {
  CLEAR_ERRORS,

  SET_NAVIGATION,
  SET_NAVIGATION_NEXT,
  SET_NAVIGATION_PREV,
  SET_NAVIGATION_AMOUNT_TO_INFO,

  SET_PLAN_ID,

  SET_INFORMATION_FIRST_NAME,
  SET_INFORMATION_LAST_NAME,
  SET_INFORMATION_EMAIL,
  SET_INFORMATION_PHONE,
  SET_INFORMATION_ADDRESS,
  SET_INFORMATION_CITY,
  SET_INFORMATION_STATE,
  SET_INFORMATION_ZIP,

  SET_INFORMATION_ERRORS,
  CLEAR_INFORMATION_ERRORS,

  SET_PAYMENT_CARD_NUMBER,
  SET_PAYMENT_EXPERATION,
  SET_PAYMENT_NAME,
  SET_PAYMENT_CSV,
  SET_PAYMENT_ZIP,

  SET_PAYMENT_ERRORS,
  CLEAR_PAYMENT_ERRORS,

  SET_PLEDGE_PROCESSING,
  SET_PLEDGE_PAYMENT_TOKEN,
  CLEAR_PLEDGE_PAYMENT_TOKEN,

  VALIDATE_INFORMATION,
  VALIDATE_PAYMENT,

  POST_PLEDGE,
} from './types';

export const setNavigation = createAction(SET_NAVIGATION);
export const setNavigationNext = createAction(SET_NAVIGATION_NEXT);
export const setNavigationPrev = createAction(SET_NAVIGATION_PREV);
export const setNavigationAmountToInfo = createAction(SET_NAVIGATION_AMOUNT_TO_INFO);

export const setPlanId = createAction(SET_PLAN_ID);

export const setInformationFirstName = createAction(SET_INFORMATION_FIRST_NAME);
export const setInformationLastName = createAction(SET_INFORMATION_LAST_NAME);
export const setInformationEmail = createAction(SET_INFORMATION_EMAIL);
export const setInformationPhone = createAction(SET_INFORMATION_PHONE);
export const setInformationAddress = createAction(SET_INFORMATION_ADDRESS);
export const setInformationCity = createAction(SET_INFORMATION_CITY);
export const setInformationState = createAction(SET_INFORMATION_STATE);
export const setInformationZip = createAction(SET_INFORMATION_ZIP);

export const setInformationErrors = createAction(SET_INFORMATION_ERRORS);
export const clearInformationErrors = createAction(CLEAR_INFORMATION_ERRORS);

export const setPaymentCardNumber = createAction(SET_PAYMENT_CARD_NUMBER);
export const setPaymentExperation = createAction(SET_PAYMENT_EXPERATION);
export const setPaymentName = createAction(SET_PAYMENT_NAME);
export const setPaymentCsv = createAction(SET_PAYMENT_CSV);
export const setPaymentZip = createAction(SET_PAYMENT_ZIP);

export const setPaymentErrors = createAction(SET_PAYMENT_ERRORS);
export const clearPaymentErrors = createAction(CLEAR_PAYMENT_ERRORS);

export const setPledgeProcessing = createAction(SET_PLEDGE_PROCESSING);
export const setPledgePaymentToken = createAction(SET_PLEDGE_PAYMENT_TOKEN);
export const clearPledgePaymentToken = createAction(CLEAR_PLEDGE_PAYMENT_TOKEN);

export const validateInformation = createAction(VALIDATE_INFORMATION);
export const validatePayment = createAction(VALIDATE_PAYMENT);

export const postPledge = createAction(POST_PLEDGE);
