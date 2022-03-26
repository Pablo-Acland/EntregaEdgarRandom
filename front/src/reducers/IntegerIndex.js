//reducers
import { combineReducers } from "redux";

function viewInteger(
  state = {
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "view-loading": {
      return {
        loading: true,
      };
    }
    case "view-loaded": {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
}

function randomInteger(
  state = {
    result: {},
  },
  action
) {
  switch (action.type) {
    case "random-result": {
      return { result: action.data };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  viewInteger,
  randomInteger,
});

export default rootReducer;