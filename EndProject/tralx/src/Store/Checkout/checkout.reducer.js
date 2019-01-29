import { ADD_TO_FLIGHT_CHECKOUT } from "./types";
const initialState = {
  checkoutType: "",
  flight: {
    returnf: {},
    onwardf: {}
  },
  hotel: {
    from: new Date(),
    to: new Date(),
    hotel: {}
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FLIGHT_CHECKOUT: {
      let flightX = state.flight;
      flightX[action.update] = action.airline;
      return {
        ...state,
        flight: flightX,
        checkoutType: action.checkoutType
      };
    }
    default: {
      return state;
    }
  }
};
