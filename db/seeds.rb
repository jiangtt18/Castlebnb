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
   title: 'Matsumoto',
   street_address: Faker::Address.street_address,
   max_guests:10,
   city: 'Tokyo',
   state: 'JP',
   zip_code: Faker::Address.zip_code,
   country:'Japan',
   discription:'Matsumoto is one of Japan’s principal historic castles; indeed, it is considered a National Treasure of Japan. Because of its black exterior, the castle is commonly known as the ‘Crow Castle.',
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
   lng:35.6895,
   lat:139.6917,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348509/castles/ef2d4e68711c97bc5feb2aa86dddcc87.jpg'
 )

 Castle.create(
   host_id: 2,
   title: 'Clouds Castle',
   street_address: Faker::Address.street_address,
   max_guests:100,
   city: 'shanghai',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:'China',
   discription:'With welcoming, majestic towers that soar to the skies, this fantastical palace brings legendary Disney storytelling to life.',
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
   lng:31.2674,
   lat:121.5221,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/c2b778dcc0d515fad22fbb4a879f0d4a.jpg'
 )

 Castle.create(
   host_id: 3,
   title: 'Hempstead House',
   street_address: Faker::Address.street_address,
   max_guests:40,
   city: 'San Francisco',
   state: 'CA',
   zip_code: Faker::Address.zip_code,
   country:"United States",
   discription: 'Behind the great iron gates of Sands Point Preserve Conservancy, guests can sit on the Great Lawn, walk through a rose garden with 1,500 bushes and take a fitness class in the Great Hall of Castle Gould.',
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
   lng:37.7767,
   lat:122.4193,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/f1b330adeb81e4f14218d3ab75ad720b.jpg'
 )

 Castle.create(
   host_id: 4,
   title: 'Auckland',
   street_address: Faker::Address.street_address,
   max_guests:40,
   city:'Auckland',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:'New Zealand',
   discription:  'It is one of a few houses of this scale in New Zealand. The house was built by prominent entrepreneur and politician, William Larnach.',
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
   lng: -36.848461,
   lat:174.763336,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/958889612329eaf5daf09a369e39e80e.jpg'
 )

 Castle.create(
   host_id: 5,
   title: 'Edgy Castle',
   street_address: Faker::Address.street_address,
   max_guests:50,
   city: 'New York',
   state: 'NY',
   zip_code: Faker::Address.zip_code,
   country:'United States',
   discription: 'From Buffalo to the Thousand Islands to the Hudson Valley, awe-inspiring castles are waiting to be explored in Upstate New York. ',
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
   lng:40.7128,
   lat:-74.0059,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/47385deb05e1c927bf30d1ca83d71f68.jpg'
 )

 Castle.create(
   host_id: 6,
   title: 'Warwick Castle',
   street_address: Faker::Address.street_address,
   max_guests:60,
   city: 'London',
   state: 'LD',
   zip_code: Faker::Address.zip_code,
   country:'United Kingdom',
   discription: 'Experience one thousand years of jaw-dropping history at Warwick Castle; great battles, ancient myths, spellbinding tales, pampered princesses, heroic knights and the dark Castle Dungeon.',
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
   lng:51.5074,
   lat:-0.1278,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/92a49b3787ad8911749c0f6a3a18877d.jpg'
  )
   Castle.create(
   host_id: 7,
   title: 'Sforza Castle',
   street_address: Faker::Address.street_address,
   max_guests:70,
   city: 'Milan',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:'Italy',
   discription: 'Through the years, it was also the home of many illustrious people. At present, the City Museums are located there',
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
   lng:45.464211,
   lat:9.191383,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/11729d32524ff902241e3a2c3a09e980.jpg'
 )



   Castle.create( host_id: 8,
   title: 'Fuji Shiro',
   street_address: Faker::Address.street_address,
   max_guests:80,
   city:'Osaka',
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:'Japan',
   discription:'The samurai warrior Akamatsu Norimura built the castle in 1333 as a fortress, and the initial structure has been subject to significant remodeling schemes over the course of the past several centuries.',
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
   lng:45.464211,
   lat:138.72905,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/75cea956b3c515cd0a30e1d0433a21fc.jpg'
  )

 Castle.create(
 host_id: 9,
 title: 'Habsburg Castle',
 street_address: Faker::Address.street_address,
 max_guests:90,
 city: 'Habsburg',
 state: Faker::Address.state,
 zip_code: Faker::Address.zip_code,
 country:'Switzerland',
 discription: 'From a distance the term "double castle" makes little sense, but as soon as you stand on the grounds of the Habsburg Castle all becomes clear',
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
 lng:47.462615,
 lat:8.186053,
 image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/958889612329eaf5daf09a369e39e80e.jpg'
)


Castle.create(
host_id: 10,
title: 'Oberhofen Castle',
street_address: Faker::Address.street_address,
max_guests:100,
city: 'Oberhofen',
state: Faker::Address.state,
zip_code: Faker::Address.zip_code,
country:'Switzerland',
discription: 'The castle, which dates back to the early 13th century, houses a living museum. The large castle park is supposed to be one of the most magnificent in the region of the Alps',
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
lng:46.731572,
lat:7.669203,
image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1523348508/castles/c2b778dcc0d515fad22fbb4a879f0d4a.jpg'
)

Castle.create(
host_id: 11,
title: 'Leeds Castle',
street_address: Faker::Address.street_address,
max_guests:11,
city:'Kent',
state: Faker::Address.state,
zip_code: Faker::Address.zip_code,
country:'United Kingdom',
discription: 'With 500 acres of beautiful parkland and formal gardens, daily activities, free flying falconry displays, spectacular events, special tours and year round attractions, Leeds Castle is one of the best days out in Kent, you will want to come back time and again!',
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
lng:1.8976,
lat:-1.5485,
image_url: 'http://res.cloudinary.com/doohtqbau/image/upload/v1523348507/castles/5d538b19ec6cd607c48bef37882d5a95.jpg'
)

Castle.create(
host_id: 12,
title: 'XieShe Castle',
street_address: Faker::Address.street_address,
max_guests:300,
city: 'Taiwan',
state: Faker::Address.state,
zip_code: Faker::Address.zip_code,
country:'China',
discription: 'With the charming mansion, pond, waterfall and garden as a romantic backdrop, Xinshe Castle is one of the favorite destinations for pre-wedding photoshoot',
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
lng:25.105497,
lat:121.597366,
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
