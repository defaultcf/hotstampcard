import React, { Component } from "react";

class Top extends Component {
  render() {
    const locationState = this.props.location.state;
    return (
      <div>
        {locationState ? locationState : null}
      </div>
    )
  }
}

export default Top
