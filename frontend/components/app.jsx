import React from 'react';
import {Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignupContainer from './session/signup_container';

const App = () => (
  <div>
    <header>
      <Link to="/" >
        <h1>Castle BnB</h1>
      </Link>
      <Link to="/signup">Sign up!</Link>
    </header>
    <Route path='/signup' component={SignupContainer} />
  </div>
);

export default App;
