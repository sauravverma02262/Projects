import React, { Component } from "react";
import { connect } from "react-redux";
import SwitchBox from "../Components/Common/Switch";
import {
  updateStops,
  airlineFilter,
  updatePriceRange
} from "../../Store/Flights/actionCreator";
import { Airlines } from "../../Store/Data";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
export class Filters extends Component {
  state = {
    stops: "all",
    priceRange: 500
  };
  handleStops = value => {
    this.props.updateStops({ stops: value });
    this.setState({ stops: value });
  };
  handleAirlineFilter = value => {
    this.props.airlineFilter(value);
  };
  handlePriceRange = value => {
    this.props.updatePriceRange(value);
    this.setState({
      priceRange: value
    });
  };
  render() {
    const { airlineFilterData } = this.props;
    return (
      <div className="flight-filters">
        <div className="filter-box-1">
          <h2>No of Stops </h2>
          <div className="box">
            <SwitchBox
              handleFlightType={this.handleStops}
              flightType={this.state.stops}
              label="All"
              value="all"
            />
            <SwitchBox
              handleFlightType={this.handleStops}
              flightType={this.state.stops}
              label="Direct"
              value="direct"
            />
            <SwitchBox
              handleFlightType={this.handleStops}
              flightType={this.state.stops}
              label="1 Stop"
              value={1}
            />
            <SwitchBox
              handleFlightType={this.handleStops}
              flightType={this.state.stops}
              label="2 Stop"
              value={2}
            />
          </div>
        </div>
        <div className="filter-box-1">
          <h2>Price Range</h2>
          <div className="box">
            <Slider
              min={500}
              max={20000}
              step={100}
              value={this.state.priceRange}
              orientation="horizontal"
              onChange={this.handlePriceRange}
            />
            <div className="value">
              Price : <strong> Rs. 500</strong> to{" "}
              <strong>Rs. {this.state.priceRange}</strong>
            </div>
          </div>
        </div>
        <div className="filter-box-1">
          <h2>Airlines</h2>
          <div className="box">
            {Airlines.map((arln, index) => (
              <div key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state[arln.airline]}
                      onChange={() => this.handleAirlineFilter(arln.airline)}
                      value={arln.airline}
                      color="primary"
                    />
                  }
                  label={arln.airline}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flightSearch: state.Flights.flightSearchResult,
  stops: state.Flights.stops,
  airlineFilterData: state.Flights.airlineFilter
});

const mapDispatchToProps = {
  updateStops,
  airlineFilter,
  updatePriceRange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
