import {takeLatest} from '@redux-saga/core/effects';
import {ADD_TODO, REMOVE_TODO, EDIT_TODO, READ_TODO} from '../../types/types';
import addTodoHandler from './handlers/addTodoHandler';
import removeTodoHandler from './handlers/removeTodoHandler';
import editTodoHandler from './handlers/editTodoHandler';
import readTodoHandler from './handlers/readTodoHandler';

function* asyncStorageSaga() {
  console.log('AsyncStorageSaga loaded');

  yield takeLatest(READ_TODO, readTodoHandler);

  yield takeLatest(ADD_TODO, addTodoHandler);

  yield takeLatest(REMOVE_TODO, removeTodoHandler);

  yield takeLatest(EDIT_TODO, editTodoHandler);
}

export default asyncStorageSaga;
