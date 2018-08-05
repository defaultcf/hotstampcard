import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.refLogin();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.doLogin}>Twitter Login</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
