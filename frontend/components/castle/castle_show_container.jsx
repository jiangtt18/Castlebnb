import { connect } from 'react-redux';
import React from 'react';

import CastleShow from './castle_show';
import { fetchCastle } from '../../actions/castle_actions';

const mapStateToProps = (state, ownProps) => ({
  castle: state.entities.castles.castle[ownProps.match.params.castleId],
  review: state.entities.reviews
});



const mapDispatchToProps = dispatch => ({
  fetchCastle: (id) => dispatch(fetchCastle(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastleShow);


{/* looks like this {1:{key:value}} */}
