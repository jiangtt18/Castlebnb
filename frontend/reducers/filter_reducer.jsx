import {UPDATE_FILTER} from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultFilters = Object.freeze({
  bounds: {},
  maxGuests:1
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    return merge({}, state, {[action.filter]: action.value});
  } else {
    return state;
  }
};

export default filtersReducer;
