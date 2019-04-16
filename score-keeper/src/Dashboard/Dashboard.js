import React from "react";

class Dashboard extends React.Component {
  render(props) {
    return (
      <div>
        <button onClick={this.props.ball}>Ball</button>
        <button onClick={this.props.hit}>Hit</button>
        <button onClick={this.props.strike}>Strike</button>
        <button onClick={this.props.foul}>Foul</button>
      </div>
    );
  }
}
export default Dashboard;
