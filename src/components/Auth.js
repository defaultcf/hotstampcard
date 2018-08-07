import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  render() {
    return (
      this.props.user.uid ? this.props.children
      : <Redirect to={{
          pathname: "/",
          state: "require login"
        }} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
