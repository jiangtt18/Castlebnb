total_rating = 0;
num_guests = @reviews.size;

@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :castle_id, :reviewer_id, :comment,
    :accuracy, :communication, :cleanliness, :location, :checkin,
    :value, :created_at
    json.reviewer review.reviewer
    total_rating += review.accuracy + review.communication +
      review.cleanliness + review.location + review.checkin
  end
end


  json.average_rating num_guests==0 ? 0 : total_rating/num_guests/6
  json.num_guests num_guests


# {
#   "9": {
#   "id": 9
#   "created_at": "2018-04-09T00:00:25.233Z",
#   "reviewer": {id: }

# }
