
json.extract! @castle, :id,:host_id, :title, :discription,
  :price,:bed_room,:bath_room,:num_guests,:bath,:lng,:lat,
  :street_address,:city,:zip_code,:state,:country,:is_AV_Equipment,
  :is_ampleParking,:is_carriage,:is_wifi, :is_oceanView,
  :is_gardenView
json.castleImageURL @castle.images.pluck(:image_url)
json.host @castle.host.firstname
# look like this {key:value}
