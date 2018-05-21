import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import Modal from "react-modal";
import ReviewIndexItem from './review_index_items.jsx';
import ReviewFromContainer from './reviewForm_container.jsx';
import ReviewModal from '../modal/modal.jsx';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
  }

  startSystem(rate, size){
    return(
    <div key={`${rate}2`} style={{fontSize:size}} className="average-rating-index">
           <StarRatingComponent
             style={{padding:'20px'}}
             name="star"
             editing={false}
             starCount={5}
             value={rate}
             starColor={'#008489'}
             emptyStarColor={'#dce0e0'}
             starSpacing="5px"
             />
         </div>
    )
  }

  render() {
    let reviews = this.props.reviews;
    let {accuracy_avg, communication_avg, cleanliness_avg,
    value_avg, checkin_avg, location_avg, rating} = this.props.castle;
    let reviewDetails = Object.values(reviews);

    return (
      <div className='review'>
        <h3>
          <div style={{display:'flex'}}>
            <span>{reviewDetails.length} Reviews </span>
            <span>{this.startSystem(rating,30)}</span>
          </div>
        </h3>
        <ul className ='ratings'>
          <li><span>Accuracy </span> <span>{this.startSystem(Math.round(accuracy_avg),20)}</span></li>
          <li><span>Location </span> <span>{this.startSystem(Math.round(location_avg),20)}</span></li>
          <li><span>Communication </span>  <span>{this.startSystem(Math.round(communication_avg),20)}</span> </li>
          <li><span>Check In </span>  <span>{this.startSystem(Math.round(checkin_avg),20)}</span>  </li>
          <li><span>Cleanliness </span>  <span>{this.startSystem(Math.round(cleanliness_avg),20)}</span> </li>
          <li><span>Value </span>  <span>{this.startSystem(Math.round(value_avg),20)}</span> </li>
        </ul>
        <ul className='reviewItems'>
          {
          reviewDetails.map(review => (
              <ReviewIndexItem
                review={review}
                key = {review.id}
              />
          ))
          }
        </ul>
        <button className='reviewButton' onClick={() => this.props.openModal('review')}>
          Write a review
        </button>


      </div>
    );
  }
}
export default withRouter(ReviewIndex);
