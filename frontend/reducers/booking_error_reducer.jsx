import {
  RECEIVE_BOOKING ,
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING_ERRORS,

} from '../actions/booking_actions';

export default (oldState = [], action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOKING:
      return [];
    case RECEIVE_BOOKINGS:
      return [];
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};
