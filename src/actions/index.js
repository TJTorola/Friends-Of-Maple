import { createAction } from '~/lib/redux';

import {
  SET_NAVIGATION,
  SET_NAVIGATION_NEXT,
  SET_NAVIGATION_PREV,

  SET_AMOUNT,
} from './types';

export const setNavigation = createAction(SET_NAVIGATION);
export const setNavigationNext = createAction(SET_NAVIGATION_NEXT);
export const setNavigationPrev = createAction(SET_NAVIGATION_PREV);

export const setAmount = createAction(SET_AMOUNT);
