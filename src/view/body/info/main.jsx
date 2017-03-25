import React from 'react';

import { AmountSelector } from '~/components/index';
import { COPY } from '~/config';
const copy = COPY.BODY.INFO;

const Info = () => (
  <div id="info">
    <AmountSelector />
    <h2>{ copy.H2 }</h2>
  </div>
);

export default Info;
