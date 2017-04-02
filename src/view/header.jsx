import React from 'react';

import { COPY } from '~/config';
const copy = COPY.HEADER;

const Header = () => (
  <div id="header">
    <h1>{ copy.H1 }</h1>
  </div>
);

export default Header;
