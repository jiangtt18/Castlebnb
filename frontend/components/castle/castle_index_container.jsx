import { connect } from 'react-redux';

import castleIndex from './castle_index';
import { fetchCastles } from '../../actions/castle_actions';

const mapStateToProps = state => ({
  
  castles: state.entities.castles,

});

const mapDispatchToProps = dispatch => ({
  fetchCastles: () => dispatch(fetchCastles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(castleIndex);
