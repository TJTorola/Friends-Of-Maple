import React from 'react';

import { AmountSelector, Form } from '~/components/index';
import { COPY, INFO_FORM } from '~/config';
const copy = COPY.BODY.INFO;

const Info = () => (
  <div id="info">
    <AmountSelector />
    <h2>{ copy.H2 }</h2>
    <Form form={ INFO_FORM } />
  </div>
);

export default Info;
