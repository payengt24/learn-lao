import { put, takeEvery, call } from 'redux-saga/effects';
import { FAVORITE_ACTIONS } from '../actions/favoriteActions';
import { getFavorite, addFavoriteToDatabase, deleteFavoriteDatabase, updateFavoriteComment } from '../requests/favoriteRequests';
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
        const user = yield getFavorite();
        console.log('getting update user:',user);
        yield put({
            type: USER_ACTIONS.SET_FAVORITES,
            user
        });

    } catch (error) {
        console.log(error);
    }
}


function* deleteFavorite(action) {

    console.log('deleting favoite in saga', action)
    try {
        yield deleteFavoriteDatabase(action.payload);
        const user = yield getFavorite();
        console.log('getting update user:',user);
        yield put({
            type: USER_ACTIONS.SET_FAVORITES,
            user
        });
    } catch (error) {
        console.log(error)
    }


}

function* updateFavorite(action) {
    console.log('11111');
    console.log(FAVORITE_ACTIONS);
    console.log(FAVORITE_ACTIONS.SET);
    console.log('action.payload', action.payload);
    try {
        yield updateFavoriteComment(action.payload);
        const user = yield getFavorite();
        yield put ({
            type: USER_ACTIONS.SET_FAVORITES,
            user
        })

        // yield put({
        //     type: FAVORITE_ACTIONS.SET,
        //     // user
        // });
    } catch (error) {
        console.log(error)
    }
}

function* favoriteSaga() {
    console.log('favoriteSage');
    yield takeEvery(FAVORITE_ACTIONS.GET, fetchFavorite);
    yield takeEvery(FAVORITE_ACTIONS.ADD, postFavorite);
    yield takeEvery(FAVORITE_ACTIONS.DELETE, deleteFavorite);
    yield takeEvery(FAVORITE_ACTIONS.SET, updateFavorite);


}

export default favoriteSaga;