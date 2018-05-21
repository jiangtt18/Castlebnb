class Castle < ApplicationRecord
  validates :host_id, :title, :discription,:price,:bed_room,:bath_room,
 :bath,:lng,:lat,:street_address,:city,:zip_code,:state, :max_guests,
  :country, presence:true

  validates :street_address, uniqueness: true


  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User,
    optional: true



  has_many :reviews,
  primary_key: :id,
  foreign_key: :castle_id,
  class_name: :Review

  has_many :bookings,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Booking

    def accuracy_avg
     self.reviews.average(:accuracy) || '0'

    end

    def communication_avg
      self.reviews.average(:communication) || '0'

    end

    def cleanliness_avg
      self.reviews.average(:cleanliness) || '0'
    end

    def value_avg
      self.reviews.average(:value) || '0'
    end

    def checkin_avg
      self.reviews.average(:checkin) || '0'
    end

    def location_avg
      self.reviews.average(:location) || '0'
    end

    def rating
       r = (accuracy_avg.to_f  + communication_avg.to_f + cleanliness_avg.to_f+
       value_avg.to_f + checkin_avg.to_f + location_avg.to_f) /6
       r.to_i
    end

    def num_guests
      self.reviews.count(:castle_id)
    end



  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end




def self.search(search_query)
  p "======================"
  p search_query
  p "======================"
  search_query = "%#{search_query.downcase}%"
  self.where('lower(city) LIKE ?', search_query)
  .or(self.where("lower(country) like ?", search_query))
  .or(self.where("lower(title) like ?", search_query))
  .or(self.where("lower(state) like ?", search_query))

end


end
