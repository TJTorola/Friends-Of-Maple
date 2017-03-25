import React from 'react';

import { AmountSelector } from '~/components/index';
import { COPY } from '~/config';
const copy = COPY.BODY.AMOUNT;

const Amount = () => (
  <div id="amount">
    <h2>{ copy.H2 }</h2>
    <p>{ copy.P }</p>
    <AmountSelector />
  </div>
);

export default Amount;
