import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import { middlewareFromMap } from '~/lib/redux';
import validation from './validation';

const logger = createLogger({ collapsed: true });

export default applyMiddleware(
  logger,
  middlewareFromMap(validation),
);
