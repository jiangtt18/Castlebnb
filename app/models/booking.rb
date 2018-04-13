class Booking < ApplicationRecord
  validates :guest_id, :castle_id, :check_in, :check_out, :num_guests,
  presence: true

  validate :validate_num_guests
  validate :no_overlapping_booking_request

  
  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User,
  optional:true

  belongs_to :guest,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :castle,
  primary_key: :id,
  foreign_key: :castle_id,
  class_name: :Castle

  def validate_num_guests
    if num_guests.to_i > self.castle.max_guests.to_i
      errors[:max_guests] << ":over max allowed guests";
    end
  end


  def no_overlapping_booking_request
    if overlap?
      errors[:base] << "Castle is not available at this time!"
    end
  end

  # private

  def overlap?
    overlapping_requests.empty?  ? false : true
  end

  def overlapping_requests
    Booking
      .where.not(id: id)
      .where.not(
        'check_in > :check_out OR
        check_out < :check_in',
        check_out: self.check_out,
        check_in: self.check_in
      )
  end
  # def validate_date_type
  #   if !check_in || !check_out
  #     errors[:date] << ": please select dates"
  #   end
  # end


end
