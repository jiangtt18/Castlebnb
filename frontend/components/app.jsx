import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import{BookContianer} from './booking/book_container';
import CastleIndexContainer from './castle/castle_index_container';
import CastleShowContainer from './castle/castle_show_container';


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />

    <Switch>
      <Route path="/castles/:castleId" component={CastleShowContainer} />
      <Route path="/" component={CastleIndexContainer} />
    </Switch>
  </div>
);

export default App;
