import React from "react";
//import WorldSpin from "../../../Images/world-spin.png";
//import TextField from "@material-ui/core/TextField";

const Banner = ({ classes, children }) => {
  return (
    <div className={`${classes}`}>
      <div className="cover">
        <div className="banner-heading">Book your Flight</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Banner;
