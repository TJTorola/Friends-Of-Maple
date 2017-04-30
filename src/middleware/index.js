import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import { middlewareFromMap } from '~/lib/redux';
import validation from './validation';
import payment from './payment';

const consoleLogger = createLogger({ collapsed: true });

const bugsnagLogger = _ => next => action => {
  Bugsnag.leaveBreadcrumb(`Action dispatch: ${action.type}`);
  next(action);
};

const logger = (ENV.stage !== 'prod')
  ? consoleLogger
  : bugsnagLogger;

export default applyMiddleware(
  logger,
  middlewareFromMap(validation),
  middlewareFromMap(payment),
);
