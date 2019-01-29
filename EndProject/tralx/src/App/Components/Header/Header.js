import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//mport Logo from "../../Images/logo.svg";
import TopMenu from "./TopMenu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };

  render() {
    const { headerTitle, appName, isLoggedIn } = this.props;
    return (
      <AppBar position="static" className="header">
        <Toolbar style={{ display: "flex" }}>
          <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
            <Link to="/">{appName} </Link>| {headerTitle}
          </Typography>
          <TopMenu isloggedIn={isLoggedIn} />
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.header.title,
  appName: state.header.appName,
  isLoggedIn: state.header.user.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
