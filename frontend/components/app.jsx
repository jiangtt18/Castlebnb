import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import CastleIndexContainer from './castle/castle_index_container';
import CastleShowContainer from './castle/castle_show_container';
import SearchContainer from './search/search_container';
import Footer from './footer/footer';


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />

    <Switch>
      // <Route exact path="/search/:search_query" component={SearchContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/castles/:castleId" component={CastleShowContainer} />
      <Route exact path="/" component={CastleIndexContainer} />
    </Switch>

    <Footer />
  </div>
);

export default App;
