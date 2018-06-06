import { put, takeEvery, call } from 'redux-saga/effects';
import { CONSONANT_ACTIONS } from '../actions/consonantActions';

import { getConsonant } from '../requests/consonantRequests';

function* fetchConsonant(action) {
    try {
        const consonant = yield getConsonant()
        yield put({
            type: CONSONANT_ACTIONS.SET,
            payload: consonant
        });
    } catch (error) {
        console.log(error);
    };
}

function* consonantSaga() {
    console.log('consonantSage');
    yield takeEvery(CONSONANT_ACTIONS.GET, fetchConsonant);
}
export default consonantSaga;