import {readTodo} from '../../../Action';
import {call, put} from '@redux-saga/core/effects';
import AsyncStorageService from '../../../../services/AsyncStorageService';

function* readTodoHandler(action) {
  // console.log('From saga', action);

  try {
    const data = yield call(AsyncStorageService.readData, action.payload);
    yield put(readTodo(data));
  } catch (e) {
    console.log('Something went wrong');
  }
}

export default readTodoHandler;
