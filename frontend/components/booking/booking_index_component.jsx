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
      <div >
        You have no upcoming trips.
        {/*}<Link to="/search">Click here</Link> to search available homes and request to book!*/}
      </div>
    );

    } else  {
      return(
        <div>
          <div >
            {this.renderTrips()}
          </div>
        </div>
      );
    }

  } else {
    return (<div></div>);
  }
}
}


export default GuestBooking;
