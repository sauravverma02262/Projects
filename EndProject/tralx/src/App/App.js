import React, { Component } from "react";
import Home from "./Home/Home";
import { AnimatedSwitch } from "react-router-transition";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
import FlightDetails from "./FlightDetails/FlightDetails";
import Checkout from "./Components/Checkout/Checkout";

class App extends Component {
  render() {
    const transitions = {
      atEnter: { opacity: 1 },
      atLeave: { opacity: 0 },
      atActive: { opacity: 1 },
      className: "switch-wrapper"
    };
    return (
      <div className="theme-1">
        <Header title="Home Page" />
        <AnimatedSwitch {...transitions}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signIn" component={Login} />
          <Route exact path="/flight-details" component={FlightDetails} />
          <Route exact path="/checkout" component={Checkout} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
