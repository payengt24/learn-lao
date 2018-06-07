import { combineReducers } from 'redux';
import { VOCABULARY_ACTIONS } from '../actions/vocabularyActions';

const vocabulary = (state = [], action) => {
    console.log('reached here', action.type);
    switch (action.type) {
        case VOCABULARY_ACTIONS.SET:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    vocabulary,
});