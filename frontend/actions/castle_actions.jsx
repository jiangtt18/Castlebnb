import * as CastleAPI from '../util/castle_util';
export const RECEIVE_CASTLES = "RECEIVE_CASTLES";
export const RECEIVE_CASTLE = "RECEIVE_CASLTE";
export const RECEIVE_CASLTE_ERRORS = "RECEIVE_CASTLE_ERRORS";

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
    type: RECEIVE_CASLTE_ERRORS,
    errors
  });
};



export const fetchCastles = data => dispatch => (
  CastleAPI.fetchcastles(data)
  .then(
    castle => dispatch(receiveCastles)),
    errors => dispatch(receiveCastleErrors(errors.responseJSON))
  )
)

export const fetchSpot = (id) => {

  return (dispatch) => {
    return SpotAPI.fetchSpot(id)
      .then((spot)=> dispatch(receiveSpot(spot)),
      (errors) => dispatch(receiveSpotErrors(errors.responseJSON))
    );
  };
};
