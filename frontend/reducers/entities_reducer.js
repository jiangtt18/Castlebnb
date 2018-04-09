import { combineReducers } from 'redux';
import castleReducer from './castle_reducer';
import reviewsReducer from './review_reducer';

export default combineReducers({
  castles: castleReducer,
  reviews: reviewsReducer,
});
