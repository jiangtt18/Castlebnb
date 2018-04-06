import * as CastleAPI from '../utils/castle_util';
export const RECEIVE_CASTLES = "RECEIVE_CASTLES";
export const RECEIVE_CASTLE = "RECEIVE_CASLTE";
export const RECEIVE_CASTLE_ERRORS = "RECEIVE_CASTLE_ERRORS";

export const receiveCastles = (castles) => {
  return ({
    type: RECEIVE_CASTLES,
    castles
  });
};

export const receiveCastle = (castle) => {
  return ({
    type: RECEIVE_CASTLE,
    castle
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
    castle => dispatch(receiveCastle(castle)),
    errors => dispatch(receiveCastleErrors(errors.responseJSON))
  )
);
