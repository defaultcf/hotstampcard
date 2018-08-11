import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";

class Top extends Component {
  componentDidMount() {
    this.props.getAllStamp(this.props.all);
  }

  render() {
    return (
      <div>
        <Link to="/about">このアプリについて</Link>
        <Calendar events={this.props.all}/>
      </div>
    )
  }
}

export default Top
