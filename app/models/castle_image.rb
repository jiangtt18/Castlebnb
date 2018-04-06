class CastleImage < ApplicationRecord
  validates :image_url, null:false
  belongs_to :castle,
    primary_key: :id,
    foreign_key: :castle_id,
    class_name: :Castle
end
