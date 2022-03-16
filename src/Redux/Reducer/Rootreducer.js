import { combineReducers } from 'redux';
import authReducer from './Loginreducer';
export const rootReducer = (history) =>
  combineReducers({
    router: history,
    auth: authReducer,
  });
