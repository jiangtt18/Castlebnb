import { connect } from 'react-redux';
import{ createNewUser } from '../../actions/session_action';
import SessionForm from './signup_form';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  formType: 'create form'
});

export default connect(null, mapDispatchToProps)(SessionForm);
