import React from 'react';
import { withRouter } from 'react-router-dom';

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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(
      () => {
        this.props.history.push('/');
        this.props.closeModal();    
      }
    );
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
            Please {this.props.formType} or {this.props.otherForm}
            <div onClick={this.props.closeModal} className="close-x">X</div>

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

  export default withRouter(Login);
