import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';
import astrologrReducer from './astrologerReducer';
import messageReducer from './messageReducer';
import modalReducer from './modalReducer';
import registerFormReducer from './registerFormReducer';
import mainReducer from './mainReducer';

export default combineReducers({
  drawer: drawerReducer,
  astrologers: astrologrReducer,
  message: messageReducer,
  modal: modalReducer,
  registerForm: registerFormReducer,
  main: mainReducer,
});
