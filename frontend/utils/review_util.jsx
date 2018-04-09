export const fetchReviews = (castleId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {castleId}
  });
};

export const createReview = (review) => {
  return $.ajax({
    url:'/api/reviews',
    method: 'POST',
    data: {review}
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    url:`/api/reviews/${id}`,
    method: 'DELETE'
  });
};
