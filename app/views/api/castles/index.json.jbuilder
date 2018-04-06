@castles.each do |castle|
  json.castle do
    json.set! castle.id do
      json.extract! castle, :id, :title, :city, :price, :num_guests
      # json.average_rating spot.average_rating # will impletment in review
      json.castleImageId castle.images.pluck(:id)
    end

  end
  json.images do
    castle.images.each do |image|
      json.set! image.id do
        json.extract! image, :id, :castle_id, :image_url
      end
    end
  end
end
