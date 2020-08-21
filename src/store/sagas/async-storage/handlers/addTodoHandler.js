import {addTodoBegin, addTodoError, addTodoFinished} from '../../../Action';
import {call, put} from '@redux-saga/core/effects';
import AsyncStorageService from '../../../../services/AsyncStorageService';

function* addTodoHandler(action) {
  console.log('From saga', action);

  yield put(addTodoBegin());

  try {
    const data = yield call(AsyncStorageService.writeData, action.payload);
    yield put(addTodoFinished(data.id, data.value));
  } catch (e) {
    yield put(addTodoError());
  }
}

export default addTodoHandler;
