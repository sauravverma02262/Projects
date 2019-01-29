import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class TopMenu extends Component {
  render() {
    const { menu, isloggedIn } = this.props;
    return (
      <ul className="top-menu">
        {menu &&
          menu.map((menuItem, index) => (
            <li key={index}>
              {isloggedIn &&
                menuItem.access === "private" && (
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                )}
              {((!isloggedIn && menuItem.access === "public") ||
                menuItem.access === "nav") && (
                <Link to={menuItem.link}>{menuItem.name}</Link>
              )}
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.header.rightMenu
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
