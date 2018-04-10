import { combineReducers } from 'redux';
import modal from './modal_reducer';
import dropDown from './drop_down_reducer';
export default combineReducers({
  modal,
  dropDown
});
