import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchReviews, createReview, receiveReviewErrors } from '../../actions/review_action';
import ReviewForm from './review_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    reviews:Object.values(state.entities.reviews)
             .filter(review => review.castle_id === ownProps.match.params.castleId),
    currentUser: state.session.currentUser || {},
    castle: state.entities.castles[ownProps.match.params.castleId],
    errors:state.errors.reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return{
    closeModal: () => dispatch(closeModal()),
    openModal:(type) => dispatch(openModal(type)),
    clearErrors: () => dispatch(receiveReviewErrors([])),
    fetchReviews: (castleId) => dispatch(fetchReviews(castleId)),
    createReview: (review) => dispatch(createReview(review)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
