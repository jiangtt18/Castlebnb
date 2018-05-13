import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchCastles,searchCastles} from '../../actions/castle_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    castles: state.entities.castles,
    
  });
};

const mapDispatchToProps = dispatch => {
  return({
     searchCastles: (params) => dispatch(searchCastles(params)),
     updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


// Guests: state.ui.filter.maxGuests,
