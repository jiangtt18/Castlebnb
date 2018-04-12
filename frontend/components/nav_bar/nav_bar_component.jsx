import React from 'react';
import { Link } from 'react-router-dom';
import GuestBooking from '../booking/booking_index_component';
import searchBar from '../search/search_bar';
import Geosuggest from 'react-geosuggest';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:''
    };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  render(){
    const {currentUser,
      login,logout,
      openModal,
      toggleDropDown,
      showBooking,
      fetchMyTrips,
      trips,
      deleteTrip
    } = this.props;

    const sessionLinks = () => (

      <header className='header'>
        <nav className="header_nav">
          <div className='left_nav'>

            <a href='#'><img src={staticAssets.logo} alt='logo'/>
          </a>


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
          {/*<form >
            <input className='search' type="text" placeholder=" Try Tokyo.."/>
          </form>*/}



        </div>
        <ul className='right_nav'>
          <li  id= 'welcome'>Hi, {currentUser.firstname}!</li>
          <li onClick= {toggleDropDown}> Trips
            <GuestBooking
              show = {showBooking}
              trips = {trips}
              fetchMyTrips = {fetchMyTrips}
              deleteTrip = {deleteTrip}
              currentUser = {currentUser}/>
          </li>
          {/*
            <li with "Trips" onClick = openDropdown <--(props) >
            have BookinIdxContainer Component inside "li"

            */
          }
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
  }

}

export default NavBar;
