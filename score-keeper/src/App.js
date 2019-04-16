import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Display from "./Display/Display";
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
        <h1>Baseball</h1>
        <Display ball={this.state.ball} strike={this.state.strike} />
        <Dashboard
          foul={this.foul}
          hit={this.hit}
          ball={this.ball}
          strike={this.strike}
        />
      </div>
    );
  }

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
    if (this.state.ball < 3) {
      this.setState({
        ball: this.state.ball + 1
      });
    } else {
      this.setState({
        ball: 0,
        strike: 0
      });
    }
  };

  strike = () => {
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      });
    } else {
      this.setState({
        strike: 0,
        ball: 0
      });
    }
  };
}

export default App;
