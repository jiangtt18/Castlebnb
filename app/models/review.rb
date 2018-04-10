class Review < ApplicationRecord
  validates :accuracy,:communication,:cleanliness, :location,
   :value, :checkin, inclusion: { in: (1..5) },presence: true
  # validate :allow_review

 belongs_to :castle,
  primary_key: :id,
  foreign_key: :castle_id,
  class_name: :Castle


  belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

 # def allow_review
 #   if Castle.find(self.castle_id).host.id == self.reviewer_id
 #     errors.add(:review, " can not be made for own home posting.")
 #   end
 # end



end
