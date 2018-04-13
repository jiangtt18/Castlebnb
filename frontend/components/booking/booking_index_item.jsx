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
      <li className='drop_down_list'>
      <div>
      <span>{this.props.mytrip.castle.title} </span>
      <span>{this.props.mytrip.check_in} </span>
      <span>{this.props.mytrip.check_out} </span>
      </div>
      <span><button onClick={this.handleDelete}>delete</button></span>
      </li>
    );
  }


}

export default withRouter(BookingIndexItem);
