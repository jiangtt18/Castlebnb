import { connect } from 'react-redux';
import React from 'react';

import CastleShow from './castle_show';
import { fetchCastle } from '../../actions/castle_actions';

const mapStateToProps = (state, ownProps) => {
  return{
  castle: state.entities.castles[ownProps.match.params.id]
};
};


const msp = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCastle: (id) => dispatch(fetchCastle(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastleShow);


{/* looks like this {1:{key:value}} */}
