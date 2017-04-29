import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import { middlewareFromMap } from '~/lib/redux';
import validation from './validation';
import payment from './payment';

const nullMiddleware = _ => next => action => next(action);

const logger = (ENV.stage !== 'prod')
  ? createLogger({ collapsed: true })
  : nullMiddleware;

export default applyMiddleware(
  logger,
  middlewareFromMap(validation),
  middlewareFromMap(payment),
);
