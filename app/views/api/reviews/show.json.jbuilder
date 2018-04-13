json.extract! @review, :id, :castle_id, :comment, :created_at,
:reviewer_id
json.reviewerName @review.reviewer.firstname
