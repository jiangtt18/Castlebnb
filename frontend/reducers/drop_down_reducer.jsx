import{OPEN_DROP_DOWN, CLOSED_DROP_DOWN} from '../actions/drop_down_action';
import {merge} from 'lodash';
const initialState = {isOpen:false};

export default (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type){
    case OPEN_DROP_DOWN:
      newState.isOpen = true;
      return newState;
    case CLOSED_DROP_DOWN:
      newState.isOpen = false;
      return newState;
    default:
      return state;
  }
};
