import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardContent,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
class Checkout extends Component {
  state = {
    expanded: null
  };
  handleChange = panel => (event, expanded) => {
    console.log(event);
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { checkoutFlight, checkoutType } = this.props;
    const { expanded } = this.state;
    return (
      <div className="checkout">
        <Card className="ticket-details">
          <CardContent>
            <Card>
              <CardContent>
                <div>
                  {JSON.stringify(checkoutFlight)} {checkoutType}
                </div>
                <ExpansionPanel
                  expanded={expanded === "panel1"}
                  onChange={this.handleChange("panel1")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>User Details</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel2"}
                  onChange={this.handleChange("panel2")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Food & Insurance</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel3"}
                  onChange={this.handleChange("panel3")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Payment</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel4"}
                  onChange={this.handleChange("panel4")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Personal data</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="payments">
          <CardContent>Payments</CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkoutFlight: state.Checkout.flight,
  checkoutType: state.Checkout.checkoutType
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
