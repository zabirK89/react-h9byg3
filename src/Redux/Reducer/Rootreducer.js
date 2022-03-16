import { combineReducers } from 'redux';
import authReducer from './Loginreducer';
import userState from './userreducer';
export const rootReducer = (history) =>
  combineReducers({
    router: history,
    auth: authReducer,
    users: userState,
  });
