import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, flagReducer } from '../reducers';
import dataService from '../middleware';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const reducers = combineReducers({
  app: rootReducer,
  flags: flagReducer,
});

const middleware = applyMiddleware(dataService(url => fetch(url)
  .then(response => response.json())));

export default createStore(reducers, composeEnhancers(middleware));
