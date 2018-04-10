import { connect } from 'react-redux';
import { fetchReviews, createReview, receiveReviewErrors } from '../../actions/review_action';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return{
    reviews:Object.values(state.entities.reviews)
             .filter(review => review.castle_id === ownProps.match.params.castleId),
    currentUser: state.session.currentUser,
    castle: state.entities.castles[ownProps.match.params.castleId],
    errors:state.errors.reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return{
    clearErrors: () => dispatch(receiveReviewErrors([])),
    fetchReviews: (castleId) => dispatch(fetchReviews(castleId)),
    createReview: (review) => dispatch(createReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
