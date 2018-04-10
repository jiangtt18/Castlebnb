import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW_ERRORS,

} from '../actions/review_action';

export default (oldState = [], action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEWS:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};
