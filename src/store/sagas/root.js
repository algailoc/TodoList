import {all, spawn, call} from 'redux-saga/effects';
import asyncStorageSaga from './async-storage/asyncStorageSaga';

function* rootSaga() {
  const sagas = [asyncStorageSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log('rootSaga()->ERROR: ' + e);
          }
        }
      }),
    ),
  );
}

export default rootSaga;
