import { put, takeEvery, call } from 'redux-saga/effects';
import { FAVORITE_ACTIONS } from '../actions/favoriteActions';
import { getFavorite, addFavoriteToDatabase, deleteFavoriteDatabase } from '../requests/favoriteRequests';
import { addFavorite } from '../requests/favoriteRequests';
import { USER_ACTIONS } from '../actions/userActions';


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

function* postFavorite(action) {

    try {
        yield put({
            type: USER_ACTIONS.ADD_FAVORITE,
            payload: action.payload
        });

        yield addFavoriteToDatabase(action);

    } catch (error) {
        console.log(error);
    }
}


function* deleteFavorite(action) {

    console.log('deleting favoite in saga', action)
    try {
        yield deleteFavoriteDatabase(action.payload);
        
    } catch (error) {
        console.log(error)
    }


}

function* favoriteSaga() {
    console.log('favoriteSage');
    yield takeEvery(FAVORITE_ACTIONS.GET, fetchFavorite);
    yield takeEvery(FAVORITE_ACTIONS.ADD, postFavorite);
    yield takeEvery(FAVORITE_ACTIONS.DELETE, deleteFavorite);


}

export default favoriteSaga;