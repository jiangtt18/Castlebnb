import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar_component';
import { logout , login} from '../../actions/session_action';
import { openModal } from '../../actions/modal_actions';
import { toggleDropDown } from '../../actions/drop_down_action';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  showBooking: state.ui.dropDown.isOpen,
  trips: state.entities.bookings
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (formUser) => dispatch(login(formUser)),
  openModal: modal => dispatch(openModal(modal)),
  toggleDropDown: () => dispatch(toggleDropDown()),
  fetchMyTrips: (guestId) => dispatch(fetchBookings(guestId)),
  deleteTrip: (id) => dispatch(deleteBooking(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
