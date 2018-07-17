import {combineReducers} from 'redux';
import board from './board';

export default combineReducers({
  data: board
});