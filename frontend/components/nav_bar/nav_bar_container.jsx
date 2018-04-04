import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar_component';
import { logout } from '../../actions/session_action';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
