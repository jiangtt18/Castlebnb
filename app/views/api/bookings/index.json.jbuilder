@bookings.each do |booking|
  json.set! booking.id do
  json.extract! booking, :id, :castle_id, :guest_id, :check_in, :check_out, :num_guests
  json.castle booking.castle
  json.guest booking.guest
end
