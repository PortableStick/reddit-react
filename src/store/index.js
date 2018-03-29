import { combineReducers, createStore } from 'redux';
import { rootReducer, flagReducer } from '../reducers';

const reducers = combineReducers({
  rootReducer,
  flagReducer,
});

export default createStore(reducers);
