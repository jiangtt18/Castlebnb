import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/session_action';
import Login from './login_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'Log in',
});
const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
  otherForm : (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
