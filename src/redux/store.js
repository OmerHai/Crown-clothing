/* This is the store that stores all the state in the app
    we have here also the middleware object tat call logger
*/

import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;