import React from 'react';

import { COPY } from '~/config';
const copy = COPY.BODY.PLEDGED;

const Processing = () => (
  <div className="pledged">
    <h1>{ copy.H1 }</h1>
    <p>{ copy.P }</p>
    <a href="http://www.maplemicrodevelopment.org/">
      <div className="Button is-green">{ copy.A }</div>
    </a>
  </div>
);

export default Processing;
