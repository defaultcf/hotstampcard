import React, { Component } from "react";

class PressButton extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <button onClick={() => this.props.pushButton(user)}>Press!</button>
      </div>
    )
  }
}

export default PressButton
