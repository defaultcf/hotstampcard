import React, { Component } from "react";

class MyPage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h3>MyPage</h3>
        <p>Name: {user.displayName}</p>
        <img src={user.img} alt={user.displayName} />
      </div>
    )
  }
}

export default MyPage
