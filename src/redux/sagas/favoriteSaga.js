import { put, takeEvery, call } from 'redux-saga/effects';
import { FAVORITE_ACTIONS } from '../actions/favoriteActions';
import { getFavorite } from '../requests/favoriteRequests';

function* fetchFavorite() {
    try {
        const favorite = yield getFavorite()
        yield put({
            type: FAVORITE_ACTIONS.SET,
            payload: favorite
        });
    } catch (error) {
        console.log(error);
    };
}

// function* deleteFavorite() {
//     try {
//         const delete = 
//     } catch (error) {}
// }

function* favoriteSaga() {
    console.log('VowelSage');
    yield takeEvery(FAVORITE_ACTIONS.GET, fetchFavorite);
    yield takeEvery(FAVORITE_ACTIONS.DELETE, deleteFavorite);
}

export default favoriteSaga;