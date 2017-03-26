import { createAction } from '~/lib/redux';

import {
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
