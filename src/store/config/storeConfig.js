import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const createAppStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export default createAppStore;
