import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardContent, Button } from "@material-ui/core";
import _ from "lodash";
export class FlightDetails extends Component {
  state = {
    sortBy: "",
    order: "asc",
    activeAirline: {}
  };

  sortDetails = sortBy => {
    if (sortBy === this.state.sortBy) {
      let order = this.state.order === "asc" ? "desc" : "asc";
      this.setState({ order });
    } else {
      this.setState({ sortBy, order: "asc" });
    }
  };
  render() {
    const { flightSearch, flightType } = this.props;
    const { sortBy, order, activeAirline } = this.state;
    const displayResults = _.orderBy(flightSearch, sortBy, order);

    return (
      <div className="flight-details">
        <Card className="header-flight">
          <CardContent>BLR -> MUM</CardContent>
        </Card>
        {displayResults &&
          displayResults.length > 0 && (
            <Card className="header-flight">
              <CardContent>
                <div className="details">
                  <div className="img">-</div>
                  <div
                    className="dep"
                    onClick={() => this.sortDetails("departureTime")}
                  >
                    Departure
                  </div>
                  <div
                    className="dur"
                    onClick={() => this.sortDetails("duration")}
                  >
                    Duration
                  </div>
                  <div
                    className="arr"
                    onClick={() => this.sortDetails("arrivalTime")}
                  >
                    Arrival
                  </div>
                  <div
                    className="pri"
                    onClick={() => this.sortDetails("price")}
                  >
                    Price
                  </div>
                  {flightType === "one-way" && <div className="book">-</div>}
                </div>
              </CardContent>
            </Card>
          )}

        {displayResults.map((airline, index) => (
          <Card className="flight-card">
            <CardContent>
              <div className="details">
                <div className="img">
                  <img src={airline.alimg} alt={airline.id} />
                  <div>
                    <small>{airline.airline}</small>
                  </div>
                </div>
                <div className="dep">
                  <strong>{airline.from}</strong>
                  <div className="divider">----------</div>
                  <div>{airline.departureTime}</div>
                </div>
                <div className="dur">
                  <strong>{airline.duration}</strong>
                  <div className="divider">----------</div>
                  <strong>Stops: {airline.stop}</strong>
                </div>
                <div className="arr">
                  <strong>{airline.to}</strong>
                  <div className="divider">----------</div>
                  <div>{airline.arrivalTime}</div>
                </div>
                <div className="pri ce">{airline.price}</div>
                {flightType === "one-way" && (
                  <div className="book">
                    <Button>Book Now</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flightSearch: state.Flights.filtered,
  flightType: state.Flights.flightType
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightDetails);
