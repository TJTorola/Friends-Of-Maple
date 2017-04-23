import { deepReducerFromMap } from '~/lib/redux';

import nav from './nav';
import planId from './planId';
import information from './information';
import payment from './payment';
import pledge from './pledge';

export default deepReducerFromMap({
  nav,
  planId,
  information,
  payment,
  pledge,
});
