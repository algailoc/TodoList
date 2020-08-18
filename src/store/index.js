import {createStore, combineReducers} from 'redux';
import {todoReducer} from './TodoReducer';

const reducers = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducers);

export default store;
