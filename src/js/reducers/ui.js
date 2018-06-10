import { LOOK } from '../actions/actions';

// Handles actions
function ui(state = {}, action) {
  switch (action.type) {
    case LOOK:
      return Object.assign({}, state);
    default:
      return state
  }
}

// Export
export default ui;