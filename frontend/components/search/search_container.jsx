import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchCastles } from '../../actions/castle_actions';

const mapStateToProps = state => {

  return({
    spots: state.entities.spots,
    maxGuests: state.ui.filter.maxGuests
  });
};

const mapDispatchToProps = dispatch => {
  return({
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
  });
};

export default connect(msp, mdp)(Search);
