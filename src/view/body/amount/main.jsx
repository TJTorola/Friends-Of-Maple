import React from 'react';
import cx from 'classnames';

import { INCREMENTS } from '~/config';

export default () => (
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

const Increment = ({ last, selectedAmount, increment: { amount, printable } }) => (
  <div
    className={incramentClassnames(last, amount === selectedAmount)}
  >
    { printable }
  </div>
);

const incramentClassnames = (isLast, isSelected) => cx(
  'increment',
  {
    'is-last': isLast,
    'is-selected': isSelected,
  }
);
