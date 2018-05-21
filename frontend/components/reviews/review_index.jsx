import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import ReviewIndexItem from './review_index_items.jsx';

class ReviewIndex extends React.Component {
  constructor(props){

    super(props);
    this.state = {showCreate: false,
                  comment: '',
                  accuracy: '',
                  communication:'',
                  cleanliness:'',
                  location:'',
                  value:'',
                  checkin:'',
                  reviewer_id:'',
                  castle_id:'',
                };

    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleAddReview(e) {
    e.preventDefault();
    this.setState({showCreate: true});
  }


  handleCreateReview() {
    const {comment, accuracy, communication, cleanliness, location,checkin, value} = this.state;
    if (this.state.showCreate === false) {
      return <div></div>;
    }
    return (
      <div className='reviewForm'>
        <div>
          <h1>Describe Your Experience</h1>
          <textarea
            value={comment}
            onChange={this.update("comment")}
            />
          <div>
          <select onChange={this.update("accuracy")}>
              <option defaultValue value="">accuracy </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
          </select>
          <select onChange={this.update("communication")}>
              <option defaultValue value="">communication </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
          </select>
          <select onChange={this.update("cleanliness")}>
              <option defaultValue value="">cleanliness </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
          </select>
          <select onChange={this.update("location")}>
              <option defaultValue value="">location </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
          </select>
          <select onChange={this.update("checkin")}>
              <option defaultValue value="">checkin </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
          </select>
          <select onChange={this.update("value")}>
              <option defaultValue value="">value </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
          </select>
          </div>

          <button className='reviewButton' onClick={this.handleSubmit} >Submit</button>
        </div>
      </div>
    );
  }

  clearState() {
    this.setState({showCreate: false,
                    comment: '',
                    accuracy: '',
                    communication:'',
                    cleanliness:'',
                    location:'',
                    value:'',
                    checkin:'',
                    reviewer_id:'',
                    castle_id:'',
                  });
  }

  handleSubmit(e) {
      const castleId = parseInt(this.props.match.params.castleId);


      const reviewerId = this.props.currentUser.id;
      const review = Object.assign({}, this.state, {
      castle_id: castleId, reviewer_id:reviewerId
    });

      this.props.createReview(review)
      .then(() => {
        if (this.props.errors.length === 0) {
          this.clearState();
        }
      }
      );

  }

  componentDidMount() {
      this.props.clearErrors();
    }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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
    let reviews = this.props.review;
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
        <button className='reviewButton' onClick={this.handleAddReview}>
          Write a review
        </button>

          {this.renderErrors()}
          {this.handleCreateReview()}
      </div>
    );
  }
}
export default withRouter(ReviewIndex);
