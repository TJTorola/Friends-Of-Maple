import React from 'react';
import { render } from 'react-dom';

import css from './sass/entry.scss';

import Root from './view/root';

document.addEventListener('DOMContentLoaded', () => {
  render(<Root />, document.querySelector('#app'));
});
