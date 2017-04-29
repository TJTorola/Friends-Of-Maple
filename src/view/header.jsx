import React from 'react';

import Logo from '~/components/logo';
import { COPY } from '~/config';
const copy = COPY.HEADER;

const Header = () => (
  <div id="header">
    <Logo className="logo" />
    <h1>{ copy.H1 }</h1>
  </div>
);

export default Header;
