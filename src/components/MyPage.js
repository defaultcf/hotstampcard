import React, { Component } from "react";
import Calendar from "./Calendar";

class MyPage extends Component {
  componentDidMount() {
    this.props.getMyStamp(this.props.user);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h3>MyPage</h3>
        <p>Name: {user.displayName}</p>
        <img src={user.img} alt={user.displayName} />
        <Calendar events={this.props.stamps} />
      </div>
    )
  }
}

export default MyPage
