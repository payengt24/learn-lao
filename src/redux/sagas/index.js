import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import consonantSaga from './consonantSaga';
import vowelSaga from './vowelSaga';
import vocabularySaga from './vocabularySaga';
import favoriteSaga from './favoriteSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    consonantSaga(),
    vowelSaga(),
    vocabularySaga(),
    favoriteSaga(),

    // watchIncrementAsync()
  ]);
}
