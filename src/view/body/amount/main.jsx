import React from 'react';

import { AmountSelector } from '~/components/index';
import { COPY } from '~/config';
const copy = COPY.BODY.AMOUNT;

const Amount = () => (
  <div id="amount">
    <h1>{ copy.H1 }</h1>
    <p>{ copy.P }</p>
    <AmountSelector />
  </div>
);

export default Amount;
