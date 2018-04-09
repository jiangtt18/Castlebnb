import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchReviews} from './utils/review_util';
import {receiveReviews} from './actions/review_action';


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
  window.fetchReviews = fetchReviews;
  window.receiveReviews = receiveReviews;

  ReactDOM.render(<Root store={store} />, root);


  // ReactDOM.render(<h1>Welcome to CastleBnB</h1>, root); // render page
});
