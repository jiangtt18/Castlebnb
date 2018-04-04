 import {combineReducers} from 'redux';
 // import entitlesReducer from './entities';
 import sessionReducer from './session';

 export default combineReducers({
   // entities: entitlesReducer,
   session: sessionReducer,
 });
