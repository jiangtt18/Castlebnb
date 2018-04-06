 import {combineReducers} from 'redux';
 import entitlesReducer from './entities_reducer';
 import errors from './errors_reducer';
 import session from './session_reducer';
 import ui from './ui_reducer';


 export default combineReducers({
   entities: entitlesReducer,
   session,
   errors,
   ui,
 });
