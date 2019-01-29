import React, { Component } from "react";
import { connect } from "react-redux";
import FlightSearch from "../Components/FlightSearch/FlightSearch";
import Filters from "./Filters";
import FlightDetails from "./FlightDetails";
import PaymentSummary from "../Components/PaymentSummary/PaymentSummary";

export class Flight extends Component {
  render() {
    const { flightSearch } = this.props;
    return (
      <div className="flight-booking">
        <FlightSearch />

        <div className="flights-contents">
          <Filters />
          <FlightDetails />
          <PaymentSummary />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flight);
