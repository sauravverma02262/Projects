import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import _ from "lodash";
export default class FlightDetailsCard extends Component {
  state = {
    sortBy: "",
    order: "asc",
    activeAirline: {}
  };
  setSortBy = sortBy => {
    if (sortBy === this.state.sortBy) {
      let order = this.state.order === "asc" ? "desc" : "asc";
      this.setState({ order });
    } else {
      this.setState({ sortBy, order: "asc" });
    }
  };
  setActiveAirLine = activeAirline => {
    if (activeAirline === this.state.activeAirline) {
      this.props.addToCheckout(this.props.type, {});
      this.setState({ activeAirline: {} });
    } else {
      this.props.addToCheckout(this.props.type, activeAirline);
      this.setState({ activeAirline });
    }
  };
  render() {
    const { flight, from, to, classess } = this.props;
    const { sortBy, order, activeAirline } = this.state;
    const fd = _.orderBy(flight, sortBy, order);
    return (
      <Card className={classess}>
        <CardContent>
          <div className="ordes">
            {from} {<ArrowForward />} {to}
          </div>
          <Card>
            <CardContent>
              <div className="details">
                <div className="img" onClick={() => this.setSortBy("alimg")}>
                  Flight
                </div>
                <div
                  className="dep"
                  onClick={() => this.setSortBy("departureTime")}
                >
                  Departure
                </div>
                <div className="dur" onClick={() => this.setSortBy("duration")}>
                  Duration
                </div>
                <div
                  className="arr"
                  onClick={() => this.setSortBy("arrivalTime")}
                >
                  Arrival
                </div>
                <div className="pri" onClick={() => this.setSortBy("price")}>
                  Price [Rs.]
                </div>
              </div>
            </CardContent>
          </Card>
          {fd &&
            fd.length > 0 &&
            fd.map((airline, index) => (
              <Card
                key={index}
                className={
                  activeAirline === airline
                    ? `active box animated pulse
                      `
                    : `box animated fadeIn`
                }
              >
                <CardContent onClick={() => this.setActiveAirLine(airline)}>
                  <div className="details">
                    <div className="img">
                      <img src={airline.alimg} alt={airline.id} />
                    </div>
                    <div className="dep">
                      <strong>{airline.from}</strong>
                      <div>{airline.departureTime}</div>
                    </div>
                    <div className="dur">
                      <strong>{airline.duration}</strong>
                      <div className="divider">------</div>
                      <strong>Stops: {airline.stop}</strong>
                    </div>
                    <div className="arr">
                      <strong>{airline.to}</strong>
                      <div>{airline.arrivalTime}</div>
                    </div>
                    <div className="pri ce">{airline.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </CardContent>
      </Card>
    );
  }
}
