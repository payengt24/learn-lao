import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import consonantSaga from './consonantSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    consonantSaga(),
    // watchIncrementAsync()
  ]);
}
