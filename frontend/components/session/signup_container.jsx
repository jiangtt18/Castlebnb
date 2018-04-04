import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import{ createNewUser } from '../../actions/session_action';
import SessionForm from './signup_form';


const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to='/login'>log in instead</Link>
  };
};
const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
