class Booking < ApplicationRecord
  validates :guest_id, :castle_id, :check_in, :check_out, :num_guests,
  presence: true

  validate :validate_num_guests
  # validate :validate_date_type

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

  # def validate_date_type
  #   if !check_in || !check_out
  #     errors[:date] << ": please select dates"
  #   end
  # end


end
