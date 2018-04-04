import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {password:'', email:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type){
    return (e) => {this.setState({[type]: e.target.value});
  };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    .then(() => this.props.history.push('/spots'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key = {`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2> Log in to continue</h2>
          <div >
            <br/>
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <label>Email:
              <input
                type='text'
                value={this.state.email}
                onChange={this.update('email')}/>
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
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

  export default Login;
