import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';

const userName = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      console.log('setting user action', action);
      return action.user.username || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case USER_ACTIONS.REQUEST_START:
      return true;
    case USER_ACTIONS.REQUEST_DONE:
      return false;
    default:
      return state;
  }
};

const favorites = (state = [], action) => {

  switch (action.type) {
    case USER_ACTIONS.SET_FAVORITES:
      return action.user.favorites;
    case USER_ACTIONS.ADD_FAVORITE:
      console.log('new favorite list', [...state, action.payload]);
      return [...state, action.payload]
    default:
      return state;
  }
};

export default combineReducers({
  userName,
  isLoading,
  favorites,
});
