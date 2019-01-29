import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import header from "./Header/Header.reducer";
import Home from "./Home/Home.reducer";
import Checkout from "./Checkout/checkout.reducer";

let middleware = applyMiddleware(thunk, logger);
let rootReducer = combineReducers({ header, Home, Checkout });

const store = createStore(rootReducer, compose(middleware));
export default store;
