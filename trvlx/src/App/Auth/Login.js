import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { showLoginPop, setUserDetails } from "../../Store/Header/actionCreator";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export class Login extends Component {
  handleClose = () => {
    this.props.showLoginPop(false);
  };
  responseFacebook = response => {
    console.log(response);
  };
  responseGoogle = response => {
    this.props.setUserDetails(response, "google");
    console.log(response);
  };
  render() {
    const { showLoginPopUp } = this.props;
    return (
      <Dialog
        open={showLoginPopUp}
        onClose={this.handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">Login</DialogTitle>
        <DialogContent className="login-container">
          <div className="login-box">
            <GoogleLogin
              clientId="775489838961-hqicpd7ptd9mi2guhkjridbqlemjc0d9.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </div>
          <div className="login-box">
            <FacebookLogin
              appId="2312201085723113"
              autoLoad={true}
              label="Login with Goglr"
              fields="name,email,picture"
              callback={this.responseFacebook}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  showLoginPopUp: state.header.showLoginPop
});

const mapDispatchToProps = { showLoginPop, setUserDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

{
  /* <Modal
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
  open={showLoginPopUp}
  className="login-container"
  onClose={this.handleClose}
>
  <div className="login-pop">
    <Button onClick={this.handleClose}>Close</Button>
    <Typography variant="title" id="modal-title">
      Text in a modal
    </Typography>
    <GoogleLogin
      clientId="775489838961-hqicpd7ptd9mi2guhkjridbqlemjc0d9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
    />
    <FacebookLogin
      appId="2312201085723113"
      autoLoad={true}
      fields="name,email,picture"
      callback={this.responseFacebook}
    />
    <Typography variant="subheading" id="simple-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </div>
</Modal>; */
}
