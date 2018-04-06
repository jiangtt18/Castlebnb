import { connect } from 'react-redux';

import castleIndex from './castle_index';
import { fetchCastles } from '../../actions/castle_actions';

const mapStateToProps = state => ({
  castles: Object.values(state.entities.castles),
  //look like this [castle: {…}, images: {…}]
});

const mapDispatchToProps = dispatch => ({
  fetchCastles: () => dispatch(fetchCastles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(castleIndex);
