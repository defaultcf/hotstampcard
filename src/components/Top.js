import React, { Component } from "react";
import Calendar from "./Calendar";

class Top extends Component {
  componentDidMount() {
    this.props.getAllStamp(this.props.all);
  }

  render() {
    return (
      <div>
        <Calendar events={this.props.all}/>
      </div>
    )
  }
}

export default Top
