import {
  GET_FLIGHT_DATA,
  UPDATE_STOPS_FILTER,
  UPDATE_FLIGHT_TYPE,
  UPDATE_AIRLINE_FILTER,
  UPDATE_PRICE_FILTER
} from "../typeConstants";
export const findFlights = query => {
  return dispatch => {
    fetch("https://my.api.mockaroo.com/flightdata.json?key=f84bcd60")
      .then(res => res.json())
      .then(flightSearchResult =>
        dispatch({ type: GET_FLIGHT_DATA, flightSearchResult })
      );
  };
};

export const updateStops = stops => {
  return {
    type: UPDATE_STOPS_FILTER,
    stops
  };
};

export const updateFilghtType = flightType => {
  return {
    type: UPDATE_FLIGHT_TYPE,
    flightType
  };
};

export const airlineFilter = airlineFilter => {
  return {
    type: UPDATE_AIRLINE_FILTER,
    airlineFilter
  };
};

export const updatePriceRange = priceRange => {
  return {
    type: UPDATE_PRICE_FILTER,
    priceRange
  };
};

//  http://www.mocky.io/v2/5b95f6bd3200005f00cdb790
