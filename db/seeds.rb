require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.destroy_all
Castle.destroy_all
CastleImage.destroy_all
Review.destroy_all
Booking.destroy_all

User.create(email: 'guest@castlebnb.com', password:'password',
   firstname:'future user', lastname:"guest")

12.times do
  User.create!(password: 'password',
     email: Faker::Internet.email,
     firstname: Faker::Name.first_name,
     lastname: Faker::Name.last_name,
     image_url: 'image_url')
end
# #test backend auth




 Castle.create(
   host_id: 1,
   title: 'asymetrical beauty',
   street_address: Faker::Address.street_address,
   max_guests:10,
   city: 'tokyo',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348509/castles/ef2d4e68711c97bc5feb2aa86dddcc87.jpg'
 )

 Castle.create(
   host_id: 2,
   title: 'top of clouds',
   street_address: Faker::Address.street_address,
   max_guests:100,
   city: 'shanghai',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/c2b778dcc0d515fad22fbb4a879f0d4a.jpg'
 )
 Castle.create(
   host_id: 3,
   title: 'secret garden',
   street_address: Faker::Address.street_address,
   max_guests:40,
   city: 'San Francisco',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/f1b330adeb81e4f14218d3ab75ad720b.jpg'
 )

 Castle.create(
   host_id: 4,
   title: 'New Zealand',
   street_address: Faker::Address.street_address,
   max_guests:40,
   city: Faker::Address.city,
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/958889612329eaf5daf09a369e39e80e.jpg'
 )

 Castle.create(
   host_id: 5,
   title: 'edge of the world',
   street_address: Faker::Address.street_address,
   max_guests:50,
   city: 'New York',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/47385deb05e1c927bf30d1ca83d71f68.jpg'
 )

 Castle.create(
   host_id: 6,
   title: 'float on the water',
   street_address: Faker::Address.street_address,
   max_guests:60,
   city: 'London',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/92a49b3787ad8911749c0f6a3a18877d.jpg'
  )
   Castle.create(
   host_id: 7,
   title: 'garden love',
   street_address: Faker::Address.street_address,
   max_guests:70,
   city: 'Milan',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/11729d32524ff902241e3a2c3a09e980.jpg'
 )
   Castle.create(
   host_id: 8,
   title: 'MiddleEast Castle',
   street_address: Faker::Address.street_address,
   max_guests:80,
   city: 'Osaka',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(500..1000),
   bed_room: rand(10..200),
   bath_room: rand(8..10),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment: true,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/75cea956b3c515cd0a30e1d0433a21fc.jpg'
 )

 Castle.create(
 host_id: 9,
 title: 'Singapore',
 street_address: Faker::Address.street_address,
 max_guests:90,
 city: Faker::Address.city,
 state: Faker::Address.state,
 zip_code: Faker::Address.zip_code,
 country:Faker::Address.country,
 discription: Faker::RickAndMorty.quote,
 price: rand(500..1000),
 bed_room: rand(10..200),
 bath_room: rand(8..10),
 bath: rand(4..8),
 num_guests: rand(10..100),
 is_AV_Equipment: true,
 is_wifi: [true, false].sample,
 is_ampleParking:[true, false].sample,
 is_carriage:[true, false].sample,
 is_oceanView:[true, false].sample,
 is_gardenView:[true, false].sample,
 lng:Faker::Address.longitude,
 lat:Faker::Address.latitude,
 image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/958889612329eaf5daf09a369e39e80e.jpg'
)


Castle.create(
host_id: 10,
title: 'Wonderland',
street_address: Faker::Address.street_address,
max_guests:100,
city: 'Washington',
state: Faker::Address.state,
zip_code: Faker::Address.zip_code,
country:Faker::Address.country,
discription: Faker::RickAndMorty.quote,
price: rand(500..1000),
bed_room: rand(10..200),
bath_room: rand(8..10),
bath: rand(4..8),
num_guests: rand(10..100),
is_AV_Equipment: true,
is_wifi: [true, false].sample,
is_ampleParking:[true, false].sample,
is_carriage:[true, false].sample,
is_oceanView:[true, false].sample,
is_gardenView:[true, false].sample,
lng:Faker::Address.longitude,
lat:Faker::Address.latitude,
image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/c2b778dcc0d515fad22fbb4a879f0d4a.jpg'
)

Castle.create(
host_id: 11,
title: 'German Castle',
street_address: Faker::Address.street_address,
max_guests:11,
city:'Boston',
state: Faker::Address.state,
zip_code: Faker::Address.zip_code,
country:Faker::Address.country,
discription: Faker::RickAndMorty.quote,
price: rand(500..1000),
bed_room: rand(10..200),
bath_room: rand(8..10),
bath: rand(4..8),
num_guests: rand(10..100),
is_AV_Equipment: true,
is_wifi: [true, false].sample,
is_ampleParking:[true, false].sample,
is_carriage:[true, false].sample,
is_oceanView:[true, false].sample,
is_gardenView:[true, false].sample,
lng:Faker::Address.longitude,
lat:Faker::Address.latitude,
image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348507/castles/5d538b19ec6cd607c48bef37882d5a95.jpg'
)

Castle.create(
host_id: 12,
title: 'No Name Castle',
street_address: Faker::Address.street_address,
max_guests:300,
city: 'Taiwan',
state: Faker::Address.state,
zip_code: Faker::Address.zip_code,
country:Faker::Address.country,
discription: Faker::RickAndMorty.quote,
price: rand(500..1000),
bed_room: rand(10..200),
bath_room: rand(8..10),
bath: rand(4..8),
num_guests: rand(10..100),
is_AV_Equipment: true,
is_wifi: [true, false].sample,
is_ampleParking:[true, false].sample,
is_carriage:[true, false].sample,
is_oceanView:[true, false].sample,
is_gardenView:[true, false].sample,
lng:Faker::Address.longitude,
lat:Faker::Address.latitude,
image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/5f3f73054951782e5fce87575d5eccf3.jpg'
)




# 20.times do
#   CastleImage.create(castle_id:rand(1..),
#     image_url: 'http://res.cloudinary.com/doohtqbau/image/upload/c_scale,w_172/v1522973051/Screen_Shot_2018-04-05_at_5.03.58_PM_dc9jwv.png'
#   )
# end


12.times do
  Review.create(accuracy: rand(3..5),
    communication: rand(3..5),
    cleanliness: rand(3..5),
    value: rand(3..5),
    checkin: rand(3..5),
    location: rand(3..5),
    comment: ['cool','awesome','greate',':)','Yes!'].sample,
    castle_id: rand(1..12),
    reviewer_id:rand(1..6)
  )



end
