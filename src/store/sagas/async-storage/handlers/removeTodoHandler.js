import {
  removeTodoBegin,
  removeTodoFinished,
  removeTodoError,
} from '../../../Action';
import {call, put} from '@redux-saga/core/effects';
import AsyncStorageService from '../../../../services/AsyncStorageService';

function* removeTodoHandler(action) {
  console.log('From saga', action);

  yield put(removeTodoBegin());

  try {
    const data = yield call(AsyncStorageService.deleteData, action.payload);
    yield put(removeTodoFinished(data));
  } catch (e) {
    yield put(removeTodoError());
  }
}

export default removeTodoHandler;
