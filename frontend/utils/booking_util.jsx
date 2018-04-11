export const fetchBookings = (guestId) => (
  $.ajax({
    method: 'GET',
    url: '/api/bookings',
    data: {guestId}
  })
);

export const fetchBooking = (id) => {
   return $.ajax({
     method:'GET',
     url: `/api/bookings/${id}`,
   });
 };

export const createBooking = (booking) => (
  $.ajax({
    method: 'POST',
    url: `api/bookings`,
    data: {booking},
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`,

  })
);

export const editBooking = (booking) => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: {booking},

  })
);
