// client/store/index.js
// Collection point for our reducers

import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from './user';
import pads from './pads';
import configs from './configs';

const reducer = combineReducers({
  user,
  pads,
  configs
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));

const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './pads';
export * from './configs';
