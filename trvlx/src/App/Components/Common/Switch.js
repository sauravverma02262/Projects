import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

const SwitchBox = props => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.flightType === props.value}
          onChange={() => props.handleFlightType(props.value)}
          value={props.value}
          color="primary"
        />
      }
      label={props.label}
    />
  );
};
export default SwitchBox;
