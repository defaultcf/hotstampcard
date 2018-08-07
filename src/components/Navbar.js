import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    this.props.refLogin();
  }

  render() {
    return (
      <div className="Navbar">
        <div>
          <Link to="/">Top</Link>
          <Link to="mypage">MyPage</Link>
          <Link to="press">Press</Link>
        </div>
        <div>
          <button onClick={this.props.doLogin}>Twitter Login</button>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
