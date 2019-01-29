import React, { Component } from "react";
import { connect } from "react-redux";
import SearchFlightBar from "../Components/SearchFlightBar/SearchFlightBar";
import FlightDetailsCard from "../Components/FlightDetailsCard/FlightDetailsCard";
import { Card, CardContent, Switch, FormControlLabel } from "@material-ui/core";
import SelectedFlightDetails from "../Components/SelectedFlightDetails/SelectedFlightDetails";
import { addToFlightCheckout } from "../../Store/Checkout/actionCreator";
export class FlightDetails extends Component {
  state = {
    flight: [],
    roundTrip: true,
    onwardf: {},
    returnf: {}
  };
  componentDidMount() {
    fetch("http://www.mocky.io/v2/5b95f6bd3200005f00cdb790")
      .then(res => res.json())
      .then(flight => this.setState({ flight }));
  }
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  checkout = (type, airline) => {
    this.props.addToFlightCheckout({ type: type, airline: airline });
    this.setState({ [type]: airline });
  };
  render() {
    const { flight, roundTrip, onwardf, returnf } = this.state;
    return (
      <div className="flight-details">
        <SearchFlightBar />
        <div className="fd-container">
          <div className="side-bar">
            <div className="stops">
              <Card>
                <CardContent>
                  <div>Stops -</div>
                  <ul>
                    <li>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedA === "direct"}
                            onChange={e =>
                              this.handleChange("checkedA", e.target.value)
                            }
                            value="direct"
                          />
                        }
                        label="Direct"
                      />
                    </li>
                    <li>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedA === "maxOne"}
                            onChange={e =>
                              this.handleChange("checkedA", e.target.value)
                            }
                            value="maxOne"
                          />
                        }
                        label="Max 1 stop"
                      />
                    </li>
                    <li>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedA === "any"}
                            onChange={e =>
                              this.handleChange("checkedA", e.target.value)
                            }
                            value="any"
                          />
                        }
                        label="any"
                      />
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className={roundTrip ? `grid-2 content` : "content grid-1"}>
            <FlightDetailsCard
              classess="details-holder"
              flight={flight}
              from="Bangalore"
              to="Mumbai"
              type="onwardf"
              selectedFlight={onwardf}
              addToCheckout={this.checkout}
            />
            {roundTrip && (
              <FlightDetailsCard
                classess={`details-holder-1`}
                flight={flight}
                from="Mumbai"
                to="Bangalore"
                type="returnf"
                selectedFlight={returnf}
                addToCheckout={this.checkout}
              />
            )}
          </div>
        </div>
        <SelectedFlightDetails onwardf={onwardf} returnf={returnf} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { addToFlightCheckout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightDetails);
