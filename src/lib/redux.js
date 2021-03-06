import { combineReducers, applyMiddleware } from 'redux';

import { reduceObj } from './std';

export const wrapActionsInDispatch = (actions, { dispatch }) => (
  reduceObj(actions, (action) => (
    (...params) => dispatch(action(...params))
  ))
);

export const middlewareFromMap = map => store => next => action => {
  if (map[action.type]) {
    map[action.type](action, store);
  }
  next(action);
};

export const applyMiddlewareMaps = (...middleware) => (
  applyMiddleware(...middleware.map(middlewareFromMap))
);

export const reducerFromMap = ({ initialValue, ...handlers }) => (
  (state = initialValue, action) => (
    (handlers[action.type])
      ? handlers[action.type](action.payload, state)
      : state
  )
);

export const deepReducerFromMap = (deepReducerMap) => {
  const reducers = reduceObj(deepReducerMap, (reducerMap) => (
    // Assume if this has an initalValue key that it is a
    // reducer obj and not a obj containing reducer objs.
    (reducerMap.initialValue === undefined)
      ? deepReducerFromMap(reducerMap)
      : reducerFromMap(reducerMap)
  ));

  return combineReducers(reducers);
};

export const createAction = (type) => (payload) => (
  (payload !== undefined) ? { type, payload } : { type }
);
