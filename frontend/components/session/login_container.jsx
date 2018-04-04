import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_action';
import Login from './login_form';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'Log in',
  navLink: <Link to='/signup'>Sign up instead</Link>
});
const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
