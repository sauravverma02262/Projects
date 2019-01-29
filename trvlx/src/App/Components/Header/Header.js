import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo.png";
import TopMenu from "./TopMenu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Helmet from "react-helmet";
import {
  showLoginPop,
  checkForUser
} from "../../../Store/Header/actionCreator";
import Login from "../../Auth/Login";

class Header extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };
  showLoginPop = () => {
    this.props.showLoginPop(true);
  };
  componentDidMount() {
    this.props.checkForUser();
  }
  render() {
    const { headerTitle, appName, isLoggedIn } = this.props;
    return (
      <div className="header">
        <AppBar position="sticky">
          <Helmet>
            <title>
              {appName} | {headerTitle}
            </title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <Toolbar style={{ display: "flex" }}>
            <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
              <Link to="/" className="logo-container">
                <span>{appName}</span>
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
              </Link>
            </Typography>

            <TopMenu isloggedIn={isLoggedIn} />
            {!isLoggedIn && (
              <button
                className="btn btn-primary"
                onClick={() => this.showLoginPop()}
              >
                Login
              </button>
            )}
          </Toolbar>
        </AppBar>
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.header.title,
  appName: state.header.appName,
  isLoggedIn: state.header.user.isLoggedIn
});

const mapDispatchToProps = {
  showLoginPop,
  checkForUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
