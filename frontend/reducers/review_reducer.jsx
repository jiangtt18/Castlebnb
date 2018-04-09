import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW
  }
  from '../actions/review_action';
import {RECEIVE_CASTLE} from'../actions/castle_actions';

import { merge } from 'lodash';

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.review.id]:action.review});
    case REMOVE_REVIEW:
      let newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    case RECEIVE_CASTLE:
      return merge({}, oldState, action.reviews);
    default:
    return oldState;
  }
};

export default reviewsReducer;
