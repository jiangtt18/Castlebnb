import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, login,logout,openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <ul >
        <li><button
          onClick={() => openModal('login')}>Login
        </button></li>

        <li><button
          onClick={() => openModal('signup')}>Signup
        </button></li>
        
        <li><button
          onClick={ ()=>
            login({email: 'guest@castlebnb.com', password:'password'})
          }>demo
        </button></li>
      </ul>
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
