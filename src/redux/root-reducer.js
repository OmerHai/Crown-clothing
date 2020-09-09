/* This is the root reducer that combines all the redux reducers */

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});