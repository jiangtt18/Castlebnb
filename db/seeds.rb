require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.destroy_all

10.times do
  User.create!(password: 'password',
     email: Faker::Internet.email,
     firstname: Faker::Name.first_name,
     lastname: Faker::Name.last_name,
     image_url: 'image_url')
end
# #test backend auth



20.times do
 Castle.create(
   host_id: [1,2,3,4,5,6,7,8,9,10].sample,
   title: Faker::Seinfeld.character,
   street_address: Faker::Address.street_address,
   city: Faker::Address.city,
   state: Faker::Address.state,
   zip_code: Faker::Address.zip_code,
   country:Faker::Address.country,
   discription: Faker::RickAndMorty.quote,
   price: rand(300..1000),
   bed_room: rand(5..10),
   bath_room: rand(4..8),
   bath: rand(4..8),
   num_guests: rand(10..100),
   is_AV_Equipment:[true, false].sample,
   is_wifi: [true, false].sample,
   is_ampleParking:[true, false].sample,
   is_carriage:[true, false].sample,
   is_oceanView:[true, false].sample,
   is_gardenView:[true, false].sample,
   lng:Faker::Address.longitude,
   lat:Faker::Address.latitude
 )
end
