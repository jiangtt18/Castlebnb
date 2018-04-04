 import {combineReducers} from 'redux';
 // import entitlesReducer from './entities';
 import errors from './errors_reducer';
 import session from './session_reducer';


 export default combineReducers({
   // entities: entitlesReducer,
   session,
   errors,
 });
