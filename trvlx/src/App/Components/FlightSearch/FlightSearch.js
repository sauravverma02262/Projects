import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";
import SwitchBox from "../Common/Switch";
import InputField from "../Common/InputField";
import SwitchFromTo from "@material-ui/icons/SwapHoriz";
import {
  findFlights,
  updateFilghtType
} from "../../../Store/Flights/actionCreator";
export class FlightSearch extends Component {
  state = {
    flightType: "one-way", // round-trip
    from: "",
    to: "",
    departureD: new Date(),
    returnD: new Date(),
    fClass: "economy",
    passengers: 1
  };
  handleFlightType = value => {
    this.props.updateFilghtType(value);
    this.setState({ flightType: value });
  };
  handleFlightForm = (name, value) => {
    this.setState({ [name]: value });
  };
  searchFlight = () => {
    this.props.findFlights(this.state);
  };
  // componentDidMount() {
  //   this.props.findFlights(this.state);
  // }
  render() {
    const {
      flightType,
      from,
      to,
      departureD,
      returnD,
      fClass,
      passengers
    } = this.state;
    return (
      <div className="flight-search">
        <div className="flight-type">
          <SwitchBox
            handleFlightType={this.handleFlightType}
            flightType={flightType}
            label="One Way"
            value="one-way"
          />
          <SwitchBox
            handleFlightType={this.handleFlightType}
            flightType={flightType}
            label="Round-trip"
            value="round-trip"
          />
        </div>

        <div className="search-form">
          <InputField
            name="from"
            label="From"
            value={from}
            handleFlightForm={this.handleFlightForm}
          />
          <div className="swap">
            <SwitchFromTo style={{ width: 60 }} />
          </div>

          <InputField
            name="to"
            label="To"
            value={to}
            handleFlightForm={this.handleFlightForm}
          />
          <InputField
            name="departureD"
            label="departure"
            value={departureD}
            handleFlightForm={this.handleFlightForm}
            type="date"
            className="input-date"
          />
          {flightType === "round-trip" && (
            <InputField
              name="returnD"
              label="Return "
              value={returnD}
              handleFlightForm={this.handleFlightForm}
              type="date"
              className="input-date"
            />
          )}
          <InputField
            name="fClass"
            label="Busi/Eco"
            value={fClass}
            handleFlightForm={this.handleFlightForm}
            type="select"
            className="input-select"
          />
          <div>
            <Button
              className="serach-button"
              onClick={() => this.searchFlight()}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  findFlights,
  updateFilghtType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearch);
