import React from 'react';

import { INCREMENTS } from '~/config';
import Increment from './increment';

const Amount = () => (
  <div id="amount">
    <div className="value-select">
      { INCREMENTS.map(mIncrement) }
    </div>
  </div>
);

const mIncrement = (increment, idx, increments) => (
  <Increment
    key={idx}
    increment={increment}
    last={idx === increments.length - 1}
  />
);

export default Amount;
