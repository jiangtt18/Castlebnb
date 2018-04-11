import React from 'react';
import BookingIndexItem from './booking_index_item';
import { Link} from 'react-router-dom';


class GuestBooking extends React.Component{

  componentDidMount() {
    // debugger;{/* did not hit this line */}
    console.log('didmount')
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
  if (Object.keys(this.props.trips).length === 0 && (this.props.currentUser)) {
    return(
    <div >
      You have no upcoming trips.
      {/*}<Link to="/search">Click here</Link> to search available homes and request to book!*/}
    </div>
  );

  } else if (this.props.currentUser) {
    return(
      <div>
        <div >
          {this.renderTrips()}
        </div>
      </div>
    );
  } else {
    return <div className="not-logged-in">You must be logged in to view your bookings!</div>;
  }
}
}


export default GuestBooking;
