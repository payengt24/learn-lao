import { put, takeEvery, call } from 'redux-saga/effects';
import { VOWEL_ACTIONS } from '../actions/vowelActions';
import { getVowel } from '../requests/vowelRequests';

function* fetchVowel() {
    try {
        const vowel = yield getVowel()
        yield put({
            type: VOWEL_ACTIONS.SET,
            payload: vowel
        });
    } catch (error) {
        console.log(error);
    };
}

function* vowelSaga() {
    console.log('VowelSage');
    yield takeEvery(VOWEL_ACTIONS.GET, fetchVowel);
}

export default vowelSaga;