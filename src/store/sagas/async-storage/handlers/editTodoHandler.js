import {editTodoBegin, editTodoFinished, editTodoError} from '../../../Action';
import {call, put} from '@redux-saga/core/effects';
import AsyncStorageService from '../../../../services/AsyncStorageService';

function* editTodoHandler(action) {
  // console.log('From saga', action);

  yield put(editTodoBegin(action.payload));

  try {
    const data = yield call(AsyncStorageService.editData, action.payload);
    yield put(editTodoFinished(data.id, data.value));
  } catch (e) {
    yield put(editTodoError(action.payload));
  }
}

export default editTodoHandler;
