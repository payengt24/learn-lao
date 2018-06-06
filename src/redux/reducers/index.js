import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import consonant from './consonantReducer';

const store = combineReducers({
  user,
  login,
  consonant,
});

export default store;
