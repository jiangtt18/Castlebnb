
json.castle do
  json.extract! @castle, :id,:host_id, :title, :discription,
  :price,:bed_room,:bath_room,:num_guests,:bath,:lng,:lat,
  :street_address,:city,:zip_code,:state,:country,:is_AV_Equipment,
  :is_ampleParking,:is_carriage,:is_wifi, :is_oceanView,
  :is_gardenView
  json.castleImageURL @castle.image_url
  json.host @castle.host.firstname
  json.rating @castle.rating
  json.accuracy_avg @castle.accuracy_avg
  json.communication_avg @castle.communication_avg
  json.cleanliness_avg @castle.cleanliness_avg
  json.value_avg @castle.value_avg
  json.checkin_avg @castle.checkin_avg
  json.location_avg @castle.location_avg
end

json.reviews({})

json.reviews do
  @castle.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :castle_id, :comment, :created_at,
      :reviewer_id
      json.reviewerName review.reviewer.firstname
    end
  end
end

# look like this {key:value}
