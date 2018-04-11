import { Link, withRouter } from 'react-router';
import React from 'react';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteTrip(this.props.mytrip.id);
  }

  render() {
    return(
      <div>
        <h6>{this.props.mytrip.castle.title}</h6>
      <p>{this.props.mytrip.check_in}</p>
      <p>{this.props.mytrip.check_out}</p>
      <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }


}

export default withRouter(BookingIndexItem);
