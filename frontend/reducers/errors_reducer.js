import session from './session_errors_reducer';
import reviews from './review_errors_reducer';
import bookings from './booking_error_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  session,
  reviews,
  bookings,
});
