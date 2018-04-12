import * as CastleAPI from '../utils/castle_util';
export const RECEIVE_CASTLES = "RECEIVE_CASTLES";
export const RECEIVE_CASTLE = "RECEIVE_CASTLE";
export const RECEIVE_CASTLE_ERRORS = "RECEIVE_CASTLE_ERRORS";
export const SEARCH_CASTLES = 'SEARCH_CASTLES';



export const receiveCastles = (castles) => {
  return ({
    type: RECEIVE_CASTLES,
    castles
  });
};

export const receiveCastle = (payload) => {

  return ({
    type: RECEIVE_CASTLE,
    castle: payload.castle,
    reviews: payload.reviews,
  });
};

export const receiveCastleErrors = (errors) => {
  return({
    type: RECEIVE_CASTLE_ERRORS,
    errors
  });
};



export const fetchCastles = () => dispatch => (
  CastleAPI.fetchCastles()
  .then(
    castlesAndImages => dispatch(receiveCastles(castlesAndImages)),
    errors => dispatch(receiveCastleErrors(errors.responseJSON))
  )
);

export const fetchCastle = id => dispatch => (
  CastleAPI.fetchCastle(id)
    .then(
    payload => dispatch(receiveCastle(payload)),
    errors => dispatch(receiveCastleErrors(errors.responseJSON))
  )
);


export const searchCastles = searchQuery => dispatch => {
  return CastleAPI.searchCastles(searchQuery).then(searchResult =>
    dispatch(receiveCastles(searchResult)),
    errors => dispatch(receiveCastleErrors(errors.responseJSON)));
};
