import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { middleWareDispatch } from './middlewares';
import { rootReducer } from './Reducer/Rootreducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
export const history = createBrowserHistory();
const persistConfig = {
  key: 'wa-user',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(connectRouter(history))
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, middleWareDispatch, routerMiddleware(history))
);
export const persistor = persistStore(store);
export default store;
