import * as ReviewAPI from '../utils/review_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = (reviews) => {
  return({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const receiveReview = (review) => {
  return({
    type: RECEIVE_REVIEW,
    review
  });
};

export const removeReview = (id) => {
  return({
    type: REMOVE_REVIEW,
    id
  });
};

export const receiveReviewErrors = (errors) => {
  return({
    type: RECEIVE_REVIEW_ERRORS,
    errors
  });
};


export const fetchReviews = (castleId) => dispatch => (
  ReviewAPI.fetchReviews(castleId)
  .then(
    (reviews) => dispatch(receiveReviews(reviews)),
    (errors) =>dispatch(receiveReviewErrors(errors.responseJSON))
  )
);


export const createReview = review => dispatch => (
  ReviewAPI.createReview(review)
    .then(
      (resReview) =>  dispatch(receiveReview(resReview)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
    )
);


export const deleteReview = id => dispatch =>(
  ReviewAPI.deleteReview(id)
    .then(() => dispatch(removeReview(id)))
);
