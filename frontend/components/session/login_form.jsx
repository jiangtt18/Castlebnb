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
      <ul className='error' >

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
      <div >
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='title'> Log in to continue</div>
          <div >
            <br/>
            <div onClick={this.props.closeModal} className="close-x">X</div>

            {this.renderErrors()}
            <br/>

            <input
              placeholder= ' Email Adress '
              type='text'
              value={this.state.email}
              onChange={this.update('email')}/>

            <br/>

            <input type="password"
              placeholder=' Password'
              value={this.state.password}
              onChange={this.update('password')}
            />

            <br/>
            <input
              type="submit"
              value={this.props.formType} />
              <div className='redirect'>
                <span>  Don’t have an account?</span>
                <span><button style={{'color': '#008489'}}
                  onClick={() => this.props.otherForm()}>
                  Sign up
                </button></span>
              </div>





          </div>
        </form>

      </div>
    );
  }
}

  export default withRouter(Login);
