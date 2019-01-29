import { combineReducers } from "redux";
import header from "./Header/Header.reducer";
import signUp from "./SignUp/SignUp.reducer";
import Home from "./Home/Home.reducer";
import Flights from "./Flights/Flight.reducer";
let rootReducer = combineReducers({ header, signUp, Home, Flights });

export default rootReducer;
