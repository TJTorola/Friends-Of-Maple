import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

import { middlewareFromMap } from '~/lib/redux';
import validation from './validation';

export default applyMiddleware(
  logger,
  middlewareFromMap(validation),
);
