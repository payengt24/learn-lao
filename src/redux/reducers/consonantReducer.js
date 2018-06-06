import { combineReducers } from 'redux';
import { CONSONANT_ACTIONS } from '../actions/consonantActions';

const consonant = (state = [], action) => {
    switch (action.type) {
        case CONSONANT_ACTIONS.SET:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    consonant,
});