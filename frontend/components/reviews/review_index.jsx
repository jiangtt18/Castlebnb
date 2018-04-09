import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { round } from 'lodash';
import ReviewIndexItem from './review_index_items.jsx';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
        
    let reviews = this.props.review;
    let {accuracy_avg, communication_avg, cleanliness_avg,
    value_avg, checkin_avg, location_avg, rating} = this.props.castle
    let reviewDetails = Object.values(reviews);

    return (
      <div>
        <h3>{reviewDetails.length} Reviews {rating}</h3>
        {/* this.props.castle.averageRating */}
        <ul>
          <li>Accuracy {accuracy_avg} </li>
          <li>Location {location_avg}</li>
          <li>Communication {communication_avg}</li>
          <li>Check In { checkin_avg}</li>
          <li>Cleanliness { cleanliness_avg}</li>
          <li>Value {value_avg} </li>
        </ul>
        <ul>
          {

          reviewDetails.map(review => (
              <ReviewIndexItem
                review={review}
                key = {review.id}
              />
          ))
          }
        </ul>

      </div>

    );


  }

}
export default withRouter(ReviewIndex);
