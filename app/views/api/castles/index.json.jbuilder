
@castles.each do |castle|
  json.set! castle.id do
    json.extract! castle, :id, :title, :city, :price, :lat, :lng
    json.image_url asset_path(castle.image_url)
    json.average_rating castle.rating
    json.num_guests castle.num_guests
  end
end
