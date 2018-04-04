import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname:'',
      password: '',
      email:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.createNewUser(user);
  }


  render() {
    // console.log(this.props); testing props
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          Welcome!
          <br/>

          <div >
            <label>Email address:
              <input
                type='text'
                value={this.state.email}
                onChange={this.update('email')}/>
            </label>
            <br/>

            <label>First name:
              <input type="text"
                value={this.state.firstname}
                onChange={this.update('firstname')}
              />
            </label>
            <br/>

            <label>Last name:
                <input type="text"
                  value={this.state.lastname}
                  onChange={this.update('lastname')}
                />
            </label>
            <br/>

            <label>Create a Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}
export default SessionForm;
