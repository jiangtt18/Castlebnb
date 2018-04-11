import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchBookings} from './utils/booking_util';
import {receiveBookings} from './actions/booking_actions';


document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  let store;
  if (window.currentUser){
    const preloadedState = {
      session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
      delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBookings = fetchBookings;
  window.receiveBookings = receiveBookings;

  ReactDOM.render(<Root store={store} />, root);


  // ReactDOM.render(<h1>Welcome to CastleBnB</h1>, root); // render page
});
