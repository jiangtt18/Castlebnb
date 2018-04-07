import React from 'react';
import {Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import{BookContianer} from './booking/book_container';
import CastleIndexContainer from './castle/castle_index_container';


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />

      <div className='exploreTab'>
        <h3>Explore Castlebnb</h3>
        <img
          src= 'http://res.cloudinary.com/doohtqbau/image/upload/v1523059007/Screen_Shot_2018-04-06_at_4.19.03_PM_jsb38t.png'
          alt='awesome background picture'
        />
      <h3>Castles around the world</h3>
      </div>
      
    <CastleIndexContainer />
    <ProtectedRoute path='/book' component={BookContianer} />
  </div>
);

export default App;
