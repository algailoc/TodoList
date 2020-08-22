import {readTodoBegin, readTodoError, readTodoFinished} from '../../../Action';
import {call, put} from '@redux-saga/core/effects';
import AsyncStorageService from '../../../../services/AsyncStorageService';

function* readTodoHandler(action) {
  console.log('From saga', action);

  yield put(readTodoBegin());

  try {
    const data = yield call(AsyncStorageService.readData);
    yield put(readTodoFinished(data));
  } catch (e) {
    yield put(readTodoError());
  }
}

export default readTodoHandler;
