import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Bugsnag from 'bugsnag-js';

import { wrapActionsInDispatch } from './lib/redux';

import css from './style/entry.scss';
import Root from './view/root';

import Reducers from './reducers/index';
import Middleware from './middleware/index';
import * as Actions from './actions/index';

const store = createStore(
  Reducers,
  JSON.parse('{"nav":"PAYMENT","planId":"fom-50","information":{"firstName":"C","lastName":"D","email":"CD","phone":"","address":"","country":"","city":"","state":"","zip":"","errors":{}},"payment":{"cardNumber":"4000 0000 0000 0101","expiration":"08/23","name":"C D","csv":"223","zip":"94708","errors":{}},"pledge":{"processing":false,"paymentToken":"tok_1AE7cM4WKAYSyI1wKBmDvZN3","id":""}}'),
  Middleware
);

if (ENV.stage !== 'prod') {
  global.s = store;
  global.a = wrapActionsInDispatch(Actions, store);
} else {
  Bugsnag.apiKey = ENV.bugsnagKey;
  Bugsnag.releaseStage = ENV.stage;
  Bugsnag.appVersion = PACKAGE_VERSION;
  Bugsnag.enableNotifyUnhandledRejections();
}

export default () => (
  <Provider store={ store }>
    <Root />
  </Provider>
);
