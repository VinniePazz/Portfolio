import { combineReducers } from "redux";

const initialState = {
	chartData: {},
	textData: {},
	currentChart: [],
}

function chartDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "TEST":
      return { ...state };
    default:
      return state;
  }
}

export default combineReducers({
	chartData: chartDataReducer
});
