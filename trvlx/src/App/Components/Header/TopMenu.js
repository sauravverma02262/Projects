import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import {
  Icon,
  Card,
  CardContent,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PopupState, {
  bindTrigger,
  bindPopover
} from "material-ui-popup-state/index";

export class TopMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  displayLink = subMenuItem => {
    return (
      <li>
        <Link to={subMenuItem.link}>
          <Icon>{subMenuItem.icon}</Icon>
          <span>{subMenuItem.name}</span>
        </Link>
      </li>
    );
  };

  getMenuItem = (menuItem, index, isloggedIn, open, anchorEl) => {
    return (
      <li key={index}>
        {menuItem.type === "dropdown" && (
          <span>
            <span
              aria-owns={open ? "account-info" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Icon> {menuItem.icon} </Icon> <span>{menuItem.name}</span>
            </span>
            <Popover
              id="account-info"
              open={open}
              anchorEl={anchorEl}
              onClose={() => this.handleClose()}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <div className="sub-menu">
                <Card>
                  <CardContent>
                    <ul>
                      {menuItem.sub.map((subMenuItem, index) => {
                        if (isloggedIn && menuItem.access === "private") {
                          return this.displayLink(subMenuItem);
                        } else if (subMenuItem.access === "public") {
                          return this.displayLink(subMenuItem);
                        }
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Popover>
          </span>
        )}
        {isloggedIn &&
          menuItem.access === "private" &&
          menuItem.type === "link" &&
          this.displayLink(menuItem)}
        {((!isloggedIn && menuItem.access === "public") ||
          menuItem.access === "nav") &&
          menuItem.type === "link" &&
          this.displayLink(menuItem)}
      </li>
    );
  };

  render() {
    const { menu, isloggedIn, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(menu);
    return (
      <ul className="top-menu">
        {menu &&
          menu.map((menuItem, index) => {
            let itemKeys = Object.keys(menuItem);
            return itemKeys.map(
              (item, index) =>
                item === "public"
                  ? menuItem[item].map((menu, index) => (
                      <li key={index}>
                        <Link to={menu.link} key={index}>
                          {menu.name}
                          <span />
                        </Link>
                      </li>
                    ))
                  : isloggedIn &&
                    item === "private" &&
                    menuItem[item].map((menu, index) => (
                      <li key={index}>
                        <Link to={menu.link} key={index}>
                          {menu.name}
                        </Link>
                      </li>
                    ))
            );
          })}
        {isloggedIn &&
          user && (
            <li key="user">
              <div className="user-menu">
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {popupState => (
                    <div className="user-info">
                      <Button {...bindTrigger(popupState)}>
                        <img src={user.image} alt="user-image" />
                      </Button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left"
                        }}
                      >
                        <List component="nav">
                          <ListItem
                            button
                            selected={this.state.selectedIndex === 0}
                            onClick={event =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemText primary="Inbox" />
                          </ListItem>
                          <ListItem
                            button
                            selected={this.state.selectedIndex === 1}
                            onClick={event =>
                              this.handleListItemClick(event, 1)
                            }
                          >
                            <ListItemText primary="Drafts" />
                          </ListItem>
                        </List>
                        <Divider />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            </li>
          )}
      </ul>
    );
  }
}
// this.getMenuItem(menuItem, index, isloggedIn, open, anchorEl)
const mapStateToProps = state => ({
  menu: state.header.rightMenu,
  user: state.header.user.details
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
