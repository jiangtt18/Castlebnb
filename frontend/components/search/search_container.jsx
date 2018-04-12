import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchCastles,searchCastles} from '../../actions/castle_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    castles: state.entities.castles,
    query: ownProps.match.params.search_query
  });
};

const mapDispatchToProps = dispatch => {
  return({
     searchCastles: (params) => dispatch(searchCastles(params)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


// Guests: state.ui.filter.maxGuests,
// updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
