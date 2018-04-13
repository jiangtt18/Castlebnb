import { connect } from 'react-redux';
import React from 'react';

import CastleShow from './castle_show';
import { fetchCastle } from '../../actions/castle_actions';
import { createBooking, receiveBookingErrors } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    castle: state.entities.castles[ownProps.match.params.castleId],
    review: state.entities.reviews,
    currentUser: state.session.currentUser || {},
    bookingErrors:state.errors.bookings,
  };
};



const mapDispatchToProps = dispatch => ({
  fetchCastle: (id) => dispatch(fetchCastle(id)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(receiveBookingErrors([])),
  openModal: () => dispatch(openModal('login'))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastleShow);


{/* looks like this {1:{key:value}} */}
