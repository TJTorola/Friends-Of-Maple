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
  {},
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
