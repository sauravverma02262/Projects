import {
  GET_FLIGHT_DATA,
  UPDATE_STOPS_FILTER,
  UPDATE_FLIGHT_TYPE,
  UPDATE_AIRLINE_FILTER,
  UPDATE_PRICE_FILTER
} from "../typeConstants";

const initailState = {
  flightSearchResult: [],
  stops: "all",
  filtered: [],
  flightType: "one-way",
  airlineFilter: [],
  priceRange: 500
};

const filter = (state, type, newValue) => {
  let filterdData = state.flightSearchResult;
  if (type === "stops" && newValue !== "all") {
    filterdData = state.flightSearchResult.filter(
      airline => airline.stop === (type === "stops" ? newValue : state.stops)
    );
  }

  if (type === "airlineFilter" && newValue.length > 0) {
    filterdData = filterdData.filter(
      arln => newValue.indexOf(arln.airline) !== -1
    );
  }
  if (type === "priceRange" && newValue > 500) {
    filterdData = filterdData.filter(arln => arln.price < newValue);
  }

  return filterdData;
};

export default (state = initailState, action) => {
  switch (action.type) {
    case GET_FLIGHT_DATA: {
      return {
        ...state,
        flightSearchResult: action.flightSearchResult,
        filtered:
          state.stops !== "all"
            ? action.flightSearchResult.filter(
                flight => flight.stop === state.stops
              )
            : action.flightSearchResult
      };
    }
    case UPDATE_STOPS_FILTER: {
      return {
        ...state,
        stops: action.stops.stops,
        filtered: filter(state, "stops", action.stops.stops)
      };
    }
    case UPDATE_PRICE_FILTER: {
      return {
        ...state,
        priceRange: action.priceRange,
        filtered: filter(state, "priceRange", action.priceRange)
      };
    }
    case UPDATE_FLIGHT_TYPE: {
      return {
        ...state,
        flightType: action.flightType
      };
    }
    case UPDATE_AIRLINE_FILTER: {
      let airlineFilter = state.airlineFilter;
      let index = state.airlineFilter.indexOf(action.airlineFilter);
      if (index === -1) {
        airlineFilter.push(action.airlineFilter);
      } else {
        airlineFilter.splice(index, 1);
      }
      return {
        ...state,
        airlineFilter: airlineFilter,
        filtered: filter(state, "airlineFilter", airlineFilter)
      };
    }

    default:
      return {
        ...state
      };
  }
};
