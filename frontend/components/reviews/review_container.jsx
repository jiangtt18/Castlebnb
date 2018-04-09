import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_action';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return{
    reviews:Object.values(state.entities.reviews)
             .filter(review => review.castle_id === ownProps.match.params.castleId),
    currentUser: state.session.currentUser,
    castle: state.entities.castles[ownProps.match.params.castleId]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    deleteReview: (id) => dispatch(deleteReview(id)),
    fetchReviews: (castleId) => dispatch(fetchReviews(castleId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
