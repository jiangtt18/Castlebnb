import React from 'react';
import {Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
    </header>
    <Route path="/" component={NavBarContainer}/>
    <Route path='/signup' component={SignupContainer} />
    <Route path='/login' component={LoginContainer} />
  </div>
);

export default App;
