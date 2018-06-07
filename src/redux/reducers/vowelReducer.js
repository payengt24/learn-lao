import { combineReducers } from 'redux';
import { VOWEL_ACTIONS } from '../actions/vowelActions';

const vowel = (state = [], action) => {
    switch (action.type) {
        case VOWEL_ACTIONS.SET:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    vowel,
});