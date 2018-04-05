import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, login,logout,openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
      <button
        onClick={ ()=>
          login({email: 'guest@castlebnb.com', password:'password'})
        }>demo
      </button>
    </nav>
  );

  const personalGreeting = () => (
   <hgroup className="header-group">
     <h2 className="header-name">Hi, {currentUser.firstname}!</h2>
     <button className="header-button" onClick={logout}>Log Out</button>
   </hgroup>
 );

 return (
   currentUser ?
   personalGreeting(currentUser, logout) :
   sessionLinks()
 );


};
