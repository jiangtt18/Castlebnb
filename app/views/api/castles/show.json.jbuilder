
json.extract! @spot, :id, :title, :location, :price, :host_id, :num_guests,
:num_beds, :num_baths, :num_bedrooms, :description, :rules, :lat, :lng
json.image_url asset_path(@spot.image.url)
json.average_rating @spot.average_rating
