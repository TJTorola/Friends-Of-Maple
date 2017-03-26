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
    <div className="nav-buttons">
      <div className="Button is-gray">
        Back
      </div>
      <div className="Button is-green">
        Next
      </div>
    </div>
  </div>
);

export default Info;
