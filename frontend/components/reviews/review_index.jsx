import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
                  errors: []};

    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div>
        <span>Add a review</span>
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

          <button onClick={this.handleSubmit} >Submit</button>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
      const castleId = parseInt(this.props.match.params.castleId);
      if (!this.props.currentUser) {
          return(this.setState({errors: ["Please log in to add a review"]}));
      }
      if (this.props.errors.length !== 0) {
        return this.renderErrors();
      }

      const reviewerId = this.props.currentUser.id;
      const review = Object.assign({}, this.state, {
      castle_id: castleId, reviewer_id:reviewerId
    });

      this.props.createReview(review)
      .then(this.setState({showCreate: false,
                      comment: '',
                      accuracy: '',
                      communication:'',
                      cleanliness:'',
                      location:'',
                      value:'',
                      checkin:'',
                      reviewer_id:'',
                      castle_id:'',
                      errors: []})
      );

  }

  componentWillUnmount() {
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


  render() {
    let reviews = this.props.review;
    let {accuracy_avg, communication_avg, cleanliness_avg,
    value_avg, checkin_avg, location_avg, rating} = this.props.castle
    let reviewDetails = Object.values(reviews);

    return (
      <div>
        <h3>{reviewDetails.length} Reviews {rating}</h3>
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

        <button onClick={this.handleAddReview}>
          Write a review
        </button>
          {this.state.errors}
          {this.renderErrors()}
          {this.handleCreateReview()}

      </div>

    );
  }

}
export default withRouter(ReviewIndex);
