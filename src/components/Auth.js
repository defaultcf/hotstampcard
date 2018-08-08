import React, { Component } from "react";
import { connect } from "react-redux";

class Auth extends Component {
  render() {
    return (
      this.props.user.uid ? this.props.children
      : <p>You have to login!</p>
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
