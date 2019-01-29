import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    const { footer } = this.props;
    return (
      <Card className="app-footer">
        <CardContent className="app-container">
          <div>
            <div className="quicklink">
              <div>
                <ul>
                  {footer &&
                    footer.map((menu, index) => (
                      <li key={index}>
                        <Link to={menu.state}>{menu.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    footer: state.header.footer.menu
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
