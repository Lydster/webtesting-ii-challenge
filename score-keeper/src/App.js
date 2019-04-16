import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";

import "./App.css";

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  render() {
    return (
      <div className="App">
        <h1>Front page of app</h1>
        <Dashboard
          foul={this.foul}
          hit={this.hit}
          ball={this.ball}
          strike={this.strike}
        />
      </div>
    );
  }
  reset = () => {
    this.setState({
      ball: 0,
      strike: 0
    });
  };

  foul = () => {
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      });
    } else {
      this.setState({
        strike: this.state.strike
      });
    }
  };

  hit = () => {
    this.setState({
      ball: 0,
      strike: 0
    });
  };

  ball = () => {
    this.setState({
      ball: this.state.ball + 1
    });
  };

  strike = () => {
    this.setState({
      strike: this.state.strike + 1
    });
  };
}

export default App;
