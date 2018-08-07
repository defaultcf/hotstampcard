import React, { Component } from "react";

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
        <div>
          {this.props.stamps.map(d =>
            <p>{d.toString()}</p>
          )}
        </div>
      </div>
    )
  }
}

export default MyPage
