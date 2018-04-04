import React from 'react';
import {Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import{BookContianer} from './booking/book_container';


const App = () => (
  <div>
    <header>
    </header>
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
    <ProtectedRoute path='/book' component={BookContianer} />
  </div>
);

export default App;
