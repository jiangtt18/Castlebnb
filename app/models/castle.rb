class Castle < ApplicationRecord
  validates :host_id, :title, :discription,:price,:bed_room,:bath_room,
  :num_guests,:bath,:lng,:lat,:street_address,:city,:zip_code,:state,
  :country, presence:true

  validates :street_address, uniqueness: true

  has_many :images,
    primary_key: :id,
    foreign_key: :castle_id,
    class_name: :CastleImage

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  # has_many :reviews,
  #   primary_key: :id,
  #   foreign_key: :revies_id,
  #   class_name: :Review





  # def average_rating
  #   Total_stars = review.accuracy + review.communication +
  #   review.value + review.location + review.checkin
  #   Total_stars / review.num_reviewers
  # end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
