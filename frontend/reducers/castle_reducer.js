import { RECEIVE_CASTLES, RECEIVE_CASTLE } from '../actions/castle_actions';
import { merge } from 'lodash';

const castleReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CASTLES:
      return action.castles;
    case RECEIVE_CASTLE:
      let newState = merge({}, oldState);
      newState.castle[action.castle.id] = action.castle;
      return newState;
    default:
      return oldState;
  }
};
 export default castleReducer;
