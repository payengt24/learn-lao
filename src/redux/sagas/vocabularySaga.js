import { put, takeEvery, call } from 'redux-saga/effects';
import { VOCABULARY_ACTIONS } from '../actions/vocabularyActions';
import { getVocabulary } from '../requests/vocabularyRequests';

function* fetchVocabulary() {
    try {
        console.log('getting vocab from database');
        const vocabulary = yield getVocabulary();
        console.log('vocab data: ', vocabulary);
        yield put({
            type: VOCABULARY_ACTIONS.SET,
            payload: vocabulary
        });
    } catch (error) {
        console.log(error);
    };
}

function* vocabularySaga() {
    console.log('vocabularySaga');
    yield takeEvery(VOCABULARY_ACTIONS.GET, fetchVocabulary);
}

export default vocabularySaga;