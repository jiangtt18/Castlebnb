import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchCastles} from './utils/castle_util';
import {receiveCastles} from './actions/castle_actions';


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
  window.fetchCastles = fetchCastles;
  window.receiveCastles = receiveCastles;

  ReactDOM.render(<Root store={store} />, root);


  // ReactDOM.render(<h1>Welcome to CastleBnB</h1>, root); // render page
});
