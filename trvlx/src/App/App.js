import React, { Component } from "react";
import Header from "./Components/Header/Header";
import "../Styles/css/main.css";
import Footer from "./Components/Footer/Footer";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import { Flight } from "./Flight/Flight";

class App extends Component {
  render() {
    return (
      <div className="theme">
        <Header />
        <div className="app-components">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/flight" component={Flight} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
