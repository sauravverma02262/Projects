import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Footer extends Component {
  render() {
    return <div className="footer">Footer</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
