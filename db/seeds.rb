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
   street_address: 'Matsumoto, Edogawa, Tokyo 133-0043, Japan',
   max_guests:10,
   city: 'Tokyo',
   state: 'Tokyo',
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
   lng:139.876481,
   lat:35.7137453,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526257453/castles/architecture-asian-building-189833.jpg'
 )

 Castle.create(
   host_id: 2,
   title: 'Castle Metals',
   street_address: 'China, Shanghai, Pudong, 日樱北路258号',
   max_guests:100,
   city: 'Shanghai',
   state: 'Shanghai',
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
   lng:121.65616054423822,
   lat:31.360718087970607,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526257727/castles/ancient-architecture-attractions-208631_1.jpg'
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
   lng:-122.36078135576173,
   lat:37.82596773431547,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526258330/castles/architecture-bratislava-bratislava-castle-280173_1.jpg'
 )

 Castle.create(
   host_id: 4,
   title: 'Golden Bridge Castle',
   street_address: Faker::Address.street_address,
   max_guests:40,
   city:'San Francisco',
   state: 'CA',
   zip_code: Faker::Address.zip_code,
   country:'United States',
   discription:  'It is one of a few houses of this scale in Bay Area. The house was built by prominent entrepreneur and politician, William Larnach.',
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
   lng:-122.47825510000001,
   lat:37.8199286,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526258557/castles/ancient-architecture-attractions-290098_1.jpg'
 )

 Castle.create(
   host_id: 5,
   title: 'Flower Castle',
   street_address:'Amsterdam Avenue, New York, NY, USA',
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
   lng:40.81200507703639,
   lat:-73.93782715576174,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526259500/castles/architecture-castle-daylight-123286.jpg'
 )

 Castle.create(
   host_id: 6,
   title: 'Warwick Castle',
   street_address: Faker::Address.street_address,
   max_guests:60,
   city: 'Warwick',
   state: 'Warwick',
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
   lng: -73.93782715576174,
   lat:40.81200507703639,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526259019/castles/ancient-architecture-building-749078_1.jpg'
  )

   Castle.create(
   host_id: 7,
   title: 'Sforza Castle',
   street_address: 'Piazza Castello, 20121 Milano MI, Italy',
   max_guests:70,
   city: 'Milan',
   state: 'MI',
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
   lng:9.179332499999987,
   lat:45.4704762,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526260914/castles/architecture-bridge-building-86432.jpg'
 )



   Castle.create( host_id: 8,
   title: 'Fuji Shiro',
   street_address: 'Fuji, Shiroi, Chiba Prefecture 270-1432, Japan',
   max_guests:80,
   city:'Chiba',
   state: 'Chiba',
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
   lng:140.01643060000004,
   lat:35.7681237,
   image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526261076/castles/ancient-architecture-boats-570020_1.jpg'
  )

 Castle.create(
 host_id: 9,
 title: 'Habsburg Castle',
 street_address: '5245 Habsburg, Switzerland',
 max_guests:90,
 city: 'Habsburg',
 state: 'Habsburg',
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
 lng:8.180765599999972,
 lat:47.4625729,
 image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526261618/castles/budapest-city-cityscape-66192.jpg'
)


Castle.create(
host_id: 10,
title: 'Oberhofen Castle',
street_address: '3653 Oberhofen am Thunersee',
max_guests:100,
city: 'Oberhofen',
state: 'Oberhofen',
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
lng:7.668379100000038,
lat:46.7297144,
image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526263795/castles/ancient-architecture-building-373508.jpg'
)

Castle.create(
host_id: 11,
title: 'Castleton Close',
street_address: "Castleton Cl, Unit, Leeds LS12 2DS, UK",
max_guests:11,
city:'Leeds',
state: 'Leeds',
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
lng:-1.56708500000002,
lat:53.7958752,
image_url: 'http://res.cloudinary.com/doohtqbau/image/upload/v1526261894/castles/architecture-budapest-building-53377.jpg'
)

Castle.create(
host_id: 12,
title: 'Xin She Castle',
street_address: "No. 65, Xiezhong Street, Xinshe District, Taichung City, Taiwan 426",
max_guests:300,
city: 'Taiwan',
state: 'Taiwan',
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
lng:120.81243569999992,
lat:24.189487,
image_url:'http://res.cloudinary.com/doohtqbau/image/upload/v1526262589/castles/architecture-asia-attraction-161150.jpg'
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
