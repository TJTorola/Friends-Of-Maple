import { deepReducerFromMap } from '~/lib/redux';

import nav from './nav';
import amount from './amount';
import information from './information';
import payment from './payment';

export default deepReducerFromMap({
  nav,
  amount,
  information,
  payment,
});
