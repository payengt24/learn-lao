import { put, takeEvery, call } from 'redux-saga/effects';
import { FAVORITE_ACTIONS } from '../actions/favoriteActions';
import { getFavorite, addFavoriteToDatabase } from '../requests/favoriteRequests';
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

    try{
        yield put({
            type: USER_ACTIONS.ADD_FAVORITE,
            payload: action.payload
        });

        yield addFavoriteToDatabase(action);

    } catch (error) {
        console.log(error);
    }
}

// const data = {
//     _id: this.props.cardObject._id,
//     type: 'consonant',
//     img_path: this.props.cardObject.img_path,
//     mp3_path: this.props.cardObject.mp3_path,
//     comments: ''
// }
// const userName = {
//     username: this.props.reduxState.user.userName,
// }

// function* deleteFavorite() {
//     try {
//         const delete = 
//     } catch (error) {}
// }

function* favoriteSaga() {
    console.log('favoriteSage');
    yield takeEvery(FAVORITE_ACTIONS.GET, fetchFavorite);
    // yield takeEvery(FAVORITE_ACTIONS.DELETE, deleteFavorite);
    yield takeEvery(FAVORITE_ACTIONS.ADD, postFavorite);
    

}

export default favoriteSaga;