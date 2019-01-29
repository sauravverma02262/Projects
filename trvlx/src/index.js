import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./Styles/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Store/index";
let middleware = applyMiddleware(thunk, logger);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, compose(middleware));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
