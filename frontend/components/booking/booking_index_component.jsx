import React from 'react';
import BookingIndexItem from './booking_index_item';
import { Link} from 'react-router-dom';


class GuestBooking extends React.Component{

  componentDidMount() {
    // debugger;{/* did not hit this line */}
   this.props.fetchMyTrips(this.props.currentUser.id);

  }

  renderTrips() {
  const mytrips = Object.values(this.props.trips);
  return mytrips.map((mytrip, idx)=> {

    return (<div key={`${idx}`}>
      <BookingIndexItem mytrip={mytrip} deleteTrip={this.props.deleteTrip} />
    </div>);

  });
}

render() {

  if(this.props.trips === undefined){
    return (<p>loading</p>);
  }
  if (this.props.show) {
    if (Object.keys(this.props.trips).length === 0 ) {
      return(
      <ul className='header-notifications'>
        <li className='drop_down_list noTrip'>
          <div>You have no upcoming trips.</div>
          <div className='booking_here'>
            <Link to="/search">Click here </Link> to book!
          </div>
        </li>
      </ul>
    );

    } else  {
      return(
        <div>
          <ul className='header-notifications'>
            {this.renderTrips()}
          </ul>
        </div>
      );
    }

  } else {
    return (<div></div>);
  }
}
}


export default GuestBooking;
