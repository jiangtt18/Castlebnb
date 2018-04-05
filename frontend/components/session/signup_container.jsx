import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import{ createNewUser, receiveErrors } from '../../actions/session_action';
import SessionForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};
const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(createNewUser(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(receiveErrors([]))
});



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
