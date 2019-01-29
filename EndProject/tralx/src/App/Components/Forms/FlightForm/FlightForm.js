import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
import FormGroup from "react-bootstrap/lib/FormGroup";
import InputGroup from "react-bootstrap/lib/InputGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import FlightFrom from "@material-ui/icons/FlightTakeoff";
import SwapVert from "@material-ui/icons/SwapVert";
import Caret from "@material-ui/icons/PersonAdd";
import FlightTo from "@material-ui/icons/FlightLand";
import CalenderIcon from "@material-ui/icons/CalendarToday";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
export class FlightForm extends Component {
  render() {
    return (
      <Card>
        <CardContent className="flight-form">
          <div className="form-title">Flight</div>
          <div className="container">
            <FormGroup>
              <InputGroup>
                <InputGroup.Button>
                  <Button>
                    <FlightFrom />
                  </Button>
                </InputGroup.Button>
                <FormControl type="text" placeholder="from.." />
                <InputGroup.Button>
                  <Button>
                    <SwapVert />
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </div>
          <div className="container">
            <FormGroup>
              <InputGroup>
                <InputGroup.Button>
                  <Button>
                    <FlightTo />
                  </Button>
                </InputGroup.Button>
                <FormControl type="text" placeholder="to.." />
              </InputGroup>
            </FormGroup>
          </div>
          <div className="container">
            <FormGroup>
              <InputGroup>
                <InputGroup.Button>
                  <Button>
                    <CalenderIcon />
                  </Button>
                </InputGroup.Button>
                <FormControl
                  type="date"
                  name="date-from"
                  placeholder="dd/mm/yyyy"
                />
              </InputGroup>
            </FormGroup>
          </div>
          <div className="container">
            <FormGroup>
              <InputGroup>
                <InputGroup.Button>
                  <Button>
                    <CalenderIcon />
                  </Button>
                </InputGroup.Button>
                <FormControl
                  type="date"
                  name="date-to"
                  placeholder="dd/mm/yyyy"
                />
              </InputGroup>
            </FormGroup>
          </div>
          <div className="container">
            <FormGroup>
              <InputGroup>
                <FormControl type="text" disabled value={`${1} Person`} />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title={<Caret />}
                >
                  <MenuItem key="1">Item</MenuItem>
                  <MenuItem key="2">Item 1</MenuItem>
                  <MenuItem key="3">Item 2</MenuItem>
                </DropdownButton>
              </InputGroup>
            </FormGroup>
          </div>
          <div className="container">
            <FormGroup>
              <Button
                bsClass="btn btn-large btn-primary"
                bsSize="large"
                block
                style={{ width: 100 }}
              >
                <Link to="/flight-details" className="link">
                  Search
                </Link>
              </Button>
            </FormGroup>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default FlightForm;
