import * as BookingAPI from '../utils/booking_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";


export const receiveBookings = (bookings) => {
  return({
    type: RECEIVE_BOOKINGS,
    bookings
  });
};

export const receiveBooking = (booking) => {
  return({
    type: RECEIVE_BOOKING,
    booking
  });
};

export const removeBooking = (id) => {
  return({
    type: REMOVE_BOOKING,
    id
  });
};

export const receiveBookingErrors = (errors) => {
  return({
    type: RECEIVE_BOOKING_ERRORS,
    errors
  });
};


export const fetchBookings = (castleId) => dispatch => (
  BookingAPI.fetchBookings(castleId)
  .then(
    (bookings) => dispatch(receiveBookings(bookings)),
    (errors) =>dispatch(receiveBookingErrors(errors.responseJSON))
  )
);


export const createbooking = booking => dispatch => (
  BookingAPI.createbooking(booking)
    .then(
      (resbooking) =>  dispatch(receiveBooking(resbooking)),
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON))
    )
);

export const deletebooking = id => dispatch =>(
  BookingAPI.deleteBooking(id)
    .then(() => dispatch(removeBooking(id)))
);
