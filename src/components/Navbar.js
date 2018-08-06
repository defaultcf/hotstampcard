import React, { Component } from 'react';

class Navbar extends Component {
  componentDidMount() {
    this.props.refLogin();
  }

  render() {
    return (
      <div className="Navbar">
        <button onClick={this.props.doLogin}>Twitter Login</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
