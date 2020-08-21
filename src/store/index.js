import {createStore, combineReducers, applyMiddleware} from 'redux';
import {todoReducer} from './TodoReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
