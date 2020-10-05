/* This is the store that stores all the state in the app
    we have here also the middleware object that call logger
*/
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
/* Checks if we are in devlopment or production */
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default { store, persistor };