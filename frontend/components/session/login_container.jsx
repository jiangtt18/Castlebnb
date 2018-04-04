import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import Login from './login_form';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  formType: 'Log in',
});

export default connect(null, mapDispatchToProps)(Login);
