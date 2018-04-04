import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);

  // ReactDOM.render(<h1>Welcome to CastleBnB</h1>, root); // render page test
});
