import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import { middlewareFromMap } from '~/lib/redux';
import validation from './validation';
import payment from './payment';

const logger = createLogger({ collapsed: true });

export default applyMiddleware(
  logger,
  middlewareFromMap(validation),
  middlewareFromMap(payment),
);
