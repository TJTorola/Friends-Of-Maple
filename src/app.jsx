import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { wrapActionsInDispatch } from './lib/redux';

import css from './style/entry.scss';
import Root from './view/root';

import Reducers from './reducers/index';
import Middleware from './middleware/index';
import * as Actions from './actions/index';

const defaultStore = JSON.parse('{"nav":"PAYMENT","amount":50,"information":{"firstName":"t","lastName":"t","email":"t","phone":"","address":"","city":"","state":"","zip":"","errors":{}},"payment":{"cardNumber":"4242 4242 4242 4242","experation":"09/18","name":"Tyler Torola","csv":"232","zip":"94708","errors":{}},"pledge":{"processing":false,"paymentToken":""}}');

const store = createStore(
  Reducers,
  defaultStore,
  Middleware
);
global.s = store;
global.a = wrapActionsInDispatch(Actions, store);

export default () => (
  <Provider store={ store }>
    <Root />
  </Provider>
);
