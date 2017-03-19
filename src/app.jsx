import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { wrapActionsInDispatch } from './lib/redux';

import css from './style/entry.scss';
import Root from './view/root';

import Reducers from './reducers/index';
import Middleware from './middleware/index';
import Actions from './actions/index';

const store = createStore(
  Reducers,
  {},
  Middleware
);
global.s = store;
debugger;
global.a = wrapActionsInDispatch(Actions, store);

export default () => (
  <Provider store={ store }>
    <Root />
  </Provider>
);
