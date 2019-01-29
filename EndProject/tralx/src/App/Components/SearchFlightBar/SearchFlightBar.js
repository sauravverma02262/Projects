import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import FlightFrom from "@material-ui/icons/FlightTakeoff";
import FlightTo from "@material-ui/icons/FlightLand";
import CalenderIcon from "@material-ui/icons/CalendarToday";
import ClassType from "@material-ui/icons/Class";
import SearchIcon from "@material-ui/icons/SearchOutlined";

export class SearchFlightBar extends Component {
  render() {
    return (
      <div className="flight-bar">
        <div>
          <TextField
            placeholder="from where ?"
            className="form-field"
            label="Flight from"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightFrom />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div>
          <TextField
            placeholder="to where ?"
            className="form-field"
            label="Flight to"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTo />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div>
          <TextField
            placeholder="Date"
            id="date"
            label="Date"
            type="date"
            className="form-field"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalenderIcon />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div>
          <TextField
            placeholder="to"
            select
            value="Name"
            label="Class"
            className="form-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ClassType />
                </InputAdornment>
              )
            }}
            SelectProps={{
              MenuProps: {
                className: "Name"
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              style={{ height: 50, width: 160 }}
            >
              Search <SearchIcon />
            </Button>
          </label>
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
)(SearchFlightBar);
