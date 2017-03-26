import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

import { middlewareFromMap } from '~/lib/redux';
import advancement from './advancement';

export default applyMiddleware(
  logger,
  middlewareFromMap(advancement),
);
