import React from 'react';

import { INCREMENTS } from '~/config';
import Increment from './increment';

const AmountSelector = () => (
  <div className="AmountSelector">
    { INCREMENTS.map(mIncrement) }
  </div>
);

const mIncrement = (increment, idx, increments) => (
  <Increment
    key={idx}
    increment={increment}
    last={idx === increments.length - 1}
  />
);

export default AmountSelector;
