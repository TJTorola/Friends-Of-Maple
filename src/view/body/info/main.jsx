import React from 'react';

import { AmountSelector, Form } from '~/components/index';
import { COPY, INFO_FORM } from '~/config';
const copy = COPY.BODY.INFO;

const Info = () => (
  <div id="info">
    <AmountSelector />
    <div className="header">
      <h2>{ copy.H2 }</h2>
      <span>{ copy.SPAN }</span>
    </div>
    <Form form={ INFO_FORM } />
  </div>
);

export default Info;
