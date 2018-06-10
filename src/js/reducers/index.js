import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';

// All the reducers
const alexSavesReducers = combineReducers({
  ui
});

// Expose it
export default alexSavesReducers;