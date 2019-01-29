import React, { Component } from "react";

import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
const offer = 10;
export class componentName extends Component {
  calculateOffer = total => {
    return <span>{Math.round(total - (total * offer) / 100)}</span>;
  };
  render() {
    const { onwardf, returnf } = this.props;
    return (
      <span>
        {(onwardf.id || returnf.id) && (
          <div className="selectedFlights">
            <AppBar position="static" className="sf-container">
              <Toolbar className="sf-content">
                {onwardf.id && (
                  <div className="onward">
                    <div>
                      {onwardf.from} <span>( {onwardf.departureTime} )</span>
                    </div>

                    <div className="pri ce">Rs. {onwardf.price}</div>
                  </div>
                )}
                {returnf.id && (
                  <div className="return">
                    <div>
                      {returnf.from} <span>( {returnf.departureTime} )</span>
                    </div>

                    <div className="pri ce">Rs. {returnf.price}</div>
                  </div>
                )}
                <div className="total">
                  <div>Total</div>
                  <div className="pri ce">
                    Rs.{" "}
                    {returnf.id && onwardf.id
                      ? this.calculateOffer(
                          parseInt(onwardf.price, 0) +
                            parseInt(returnf.price, 0)
                        )
                      : onwardf.id
                        ? this.calculateOffer(parseInt(onwardf.price, 0))
                        : returnf.id
                          ? this.calculateOffer(parseInt(returnf.price, 0))
                          : ""}
                  </div>
                </div>
                <div className="checkout">
                  <Link to="/checkout">Book</Link>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </span>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentName);
