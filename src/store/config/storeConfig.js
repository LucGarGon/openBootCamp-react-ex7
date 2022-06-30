import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};
export const createAppAsyncStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),

  );
  sagaMiddleware.run(watcherSaga);
  return store;
};
