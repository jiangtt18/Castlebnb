import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchCastles } from '../../actions/castle_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {

  return({
    castles: state.entities.castles,

  });
};

const mapDispatchToProps = dispatch => {
  return({
    updateFilters: (filter, value) => dispatch(updateFilter(filter, value))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


// Guests: state.ui.filter.maxGuests,
