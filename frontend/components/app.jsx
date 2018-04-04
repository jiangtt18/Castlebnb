import React from 'react';
import {Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <header>
      <Link to="/" >
        <h1>Castle BnB</h1>
      </Link>
    </header>
    <Route path='/signup' component={SignupContainer} />
    <Route path='/login' component={LoginContainer} />
  </div>
);

export default App;
