import { createAction } from '~/lib/redux';

import {
  CLEAR_ERRORS,

  SET_NAVIGATION,
  SET_NAVIGATION_NEXT,
  SET_NAVIGATION_PREV,
  SET_NAVIGATION_AMOUNT_TO_INFO,

  SET_AMOUNT,

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

  VALIDATE_INFORMATION,
  POST_PLEGE,
} from './types';

export const setNavigation = createAction(SET_NAVIGATION);
export const setNavigationNext = createAction(SET_NAVIGATION_NEXT);
export const setNavigationPrev = createAction(SET_NAVIGATION_PREV);
export const setNavigationAmountToInfo = createAction(SET_NAVIGATION_AMOUNT_TO_INFO);

export const setAmount = createAction(SET_AMOUNT);

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

export const validateInformation = createAction(VALIDATE_INFORMATION);
export const postPledge = createAction(POST_PLEGE);
