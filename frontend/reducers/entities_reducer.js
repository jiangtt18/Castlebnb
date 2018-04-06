import { combineReducers } from 'redux';
import castleReducer from './castle_reducer';

export default combineReducers({
  castles: castleReducer,
});
