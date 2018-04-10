@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :castle_id, :reviewer_id, :comment,
    :accuracy, :communication, :cleanliness, :location, :checkin,
    :value, :created_at, :reviewer

  end
end




# {
#   "9": {
#   "id": 9
#   "created_at": "2018-04-09T00:00:25.233Z",
#   "reviewer": {id: }

# }
