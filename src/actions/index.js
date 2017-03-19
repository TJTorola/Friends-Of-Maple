import { createAction } from '~/lib/redux';

import {
  SET_NAVIGATION,
  SET_NAVIGATION_NEXT,
  SET_NAVIGATION_PREV,
} from './types';

export default {
  setNavigation: createAction(SET_NAVIGATION),
  setNavigationNext: createAction(SET_NAVIGATION_NEXT),
  setNavigationPrev: createAction(SET_NAVIGATION_PREV),
};
