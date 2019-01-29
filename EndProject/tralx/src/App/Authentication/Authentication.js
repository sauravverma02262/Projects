import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../Login/Login";

export class Authentication extends Component {
  static propTypes = {
    isLogin: PropTypes.bool
  };
  render() {
    const { isLogin } = this.props;
    return (
      <div>
        {isLogin && <h1>Hello Member</h1>}
        {!isLogin && <Login />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    isLogin: auth.isLogin
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
