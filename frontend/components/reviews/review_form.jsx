import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
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
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
      }

    renderErrors() {
      return(
        <ul className='error' >

          {this.props.errors.map((error,i) => (
            <li key = {`errors-${i}`}>
              {error}
            </li>
          ))}
        </ul>
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

    handleSubmit(e){

      e.preventDefault();

        if(Object.values(this.props.currentUser).length !== 0){

        const castleId = this.props.match.params.castleId;
        const reviewerId = this.props.currentUser.id;
        const review = Object.assign({}, this.state, {
        castle_id: castleId, reviewer_id:reviewerId
      });

        this.props.createReview(review)
        .then(() => {
          if (this.props.errors.length === 0) {
            this.clearState();
            this.props.closeModal();
          }
        }
        );
      } else {

        this.props.openModal('login');
      }
    }

    update(field) {
      return (e) => this.setState({
        [field]: e.currentTarget.value
      });
    }


    onStarClick(nextValue, prevValue, name) {
      this.setState({
        [name]: nextValue
      });
    }

    handleOptionChange(field){
      return(e) => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleStarClick(name){
      return(
        <div className="stars" style={{fontSize:28}} >
        <StarRatingComponent
          name={name}
          starCount={5}
          onStarClick={this.onStarClick.bind(this)}
          starColor={'#008489'}
          emptyStarColor={'#dce0e0'}
          />
        </div>
    )}
    render(){
      const {comment, accuracy, communication, cleanliness, location,checkin, value} = this.state;

      return(
        <div className = 'review-modal'>
        <div className="flex-review-form">
          <div className="review-form">
            <div className="review-form-header">
              <div className="flex">
                <h1 className="review-form-title">Describe Your Experience</h1><h4 className="review-form-title-thin">(required)</h4>
              </div>
              <h3 className="review-form-title-thin">Your review will be public on this home's pages.</h3>
            </div>
            <div className="review-form-input">

              <form onSubmit={this.handleSubmit}>
                <div onClick={() =>this.props.closeModal()} className="close-x"><i className="fa fa-times"></i></div>
                  {this.renderErrors()}
                <textarea
                  className="review-textarea"
                  value={comment}
                  onChange={this.handleOptionChange('comment')}
                  />
                <div className="review-label">
                  <label className="review-form-title">Accuracy</label>
                  <p className="review-form-title-thin">Was the home description accurate?</p>
                </div>
                <div>
                  {this.handleStarClick("accuracy")}
                </div>
                <div className="review-label">
                  <label className="review-form-title">Communication</label>
                  <p className="review-form-title-thin">How clearly did the host communicate plans, questions and concerns?</p>
                </div>
                  {this.handleStarClick("communication")}
                <div className="review-label">
                  <label className="review-form-title">Cleanliness</label>
                  <p className="review-form-title-thin">Was the home clean on your arrival?</p>
                </div>
                {this.handleStarClick("cleanliness")}
                <div className="review-label">
                  <label className="review-form-title">Location</label>
                  <p className="review-form-title-thin">How would you rate the location of the home?</p>
                </div>
                {this.handleStarClick("location")}
                <div className="review-label">
                  <label className="review-form-title">Checkin</label>
                  <p className="review-form-title-thin">How timely and easy was your check in?</p>
                </div>
                  {this.handleStarClick("checkin")}
                <div className="review-label">
                  <label className="review-form-title">Value</label>
                  <p className="review-form-title-thin">How would you rate the value of the home for the price?</p>
                </div>
                  {this.handleStarClick("value")}

                <input
                  className="submit-booking"
                  type="submit"
                  value="Submit Review"
                  />
              </form>
            </div>
          </div>
        </div>
        </div>
      );
    }

}

export default withRouter(ReviewForm);
