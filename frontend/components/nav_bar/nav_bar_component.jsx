import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, login,logout,openModal }) => {

  const sessionLinks = () => (
    <header className='header'>
    <nav className="header_nav">
      <div className='left_nav'>

          <a href='#'><img src={staticAssets.logo} alt='logo'/>
          </a>
        <input className='search' type="text" placeholder=" Try Tokyo.."/>
      </div>
      <ul >
        <li><button
          onClick={() => openModal('login')}>Login
        </button></li>

        <li><button
          onClick={() => openModal('signup')}>Signup
        </button></li>

        <li><button
          onClick={ ()=>
            login({email: 'guest@castlebnb.com', password:'password',
               firstname:'future user', lastname:"guest"})
          }> demo
        </button></li>
      </ul>
    </nav>

    </header>


  );

  const personalGreeting = () => (


   <header className='header'>
     <nav className="header_nav">
       <div className='left_nav'>
           <a href='#'><img src={staticAssets.logo} alt='logo'/>
           </a>
         <input className='search' type="text" placeholder=" Try Tokyo.."/>
       </div>
       <ul className='right_nav'>
         <li  id= 'welcome'>Hi, {currentUser.firstname}!</li>
         <li><button onClick={logout}>Log Out</button></li>
       </ul>
    </nav>
   </header>
 );

 return (
   currentUser ?
   personalGreeting(currentUser, logout) :
   sessionLinks()
 );



};
