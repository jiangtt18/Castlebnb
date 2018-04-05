import React from 'react';
import {Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';

import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import{BookContianer} from './booking/book_container';


const App = () => (
  <div>
    <Modal />

      <NavBarContainer />

    <ProtectedRoute path='/book' component={BookContianer} />
  </div>
);

export default App;
