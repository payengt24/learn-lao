import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import consonant from './consonantReducer';
import vowel from './vowelReducer';
import vocabulary from './vocabularyReducer';

const store = combineReducers({
  user,
  login,
  consonant,
  vowel,
  vocabulary,

});

export default store;
