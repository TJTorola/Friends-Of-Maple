import { deepReducerFromMap } from '~/lib/redux';

import nav from './nav';
import amount from './amount';
import information from './information';
import payment from './payment';
import pledge from './pledge';

export default deepReducerFromMap({
  nav,
  amount,
  information,
  payment,
  pledge,
});
