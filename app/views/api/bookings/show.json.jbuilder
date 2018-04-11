json.extract! @booking, :id, :castle_id, :guest_id, :check_in, :check_out
json.castle @booking.castle
json.guest @booking.guest
