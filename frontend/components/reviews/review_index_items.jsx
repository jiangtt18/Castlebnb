import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    const {reviewer_id,created_at,comment,reviewerName} = this.props.review;
    const date = new Date(created_at);
    const dates = date.toDateString().split(' ');

    return (
      <div className='reviewComment'>
      <li >
        <p id='reviewer'>{reviewerName}</p>
        <p  id='date'> {dates[1]} {dates[3]} </p>
        <p id = 'comment'>{comment}</p>
      </li>
      </div>
    );
  }
}

export default ReviewIndexItem;
