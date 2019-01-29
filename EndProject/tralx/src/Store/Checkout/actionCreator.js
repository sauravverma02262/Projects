import { ADD_TO_FLIGHT_CHECKOUT } from "./types";
export const addToFlightCheckout = obj => {
  return {
    type: ADD_TO_FLIGHT_CHECKOUT,
    update: obj.type,
    airline: obj.airline,
    checkoutType: "F"
  };
};
