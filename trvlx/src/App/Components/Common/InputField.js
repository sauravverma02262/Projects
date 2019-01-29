import React from "react";
import { TextField, FormControl, MenuItem } from "@material-ui/core";
const types = [
  {
    value: "economy",
    label: "Economy"
  },
  {
    value: "business",
    label: "Business"
  }
];

const InputField = props => {
  return (
    <FormControl style={{ margin: 6 }}>
      <TextField
        id="outlined-simple-start-adornment"
        select={props.type === "select"}
        label={props.label}
        value={props.value}
        type={props.type}
        onChange={event =>
          props.handleFlightForm(props.name, event.target.value)
        }
        margin="normal"
      >
        {props.type === "select" &&
          types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </FormControl>
  );
};

export default InputField;
