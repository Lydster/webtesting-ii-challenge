import React from "react";
//import { Button } from "react-materialize";
import Button from "@material-ui/core/Button";

class Dashboard extends React.Component {
  render(props) {
    return (
      <div>
        <Button
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.ball}
        >
          Ball
        </Button>
        <Button
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.hit}
        >
          Hit
        </Button>
        <Button
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.strike}
        >
          Strike
        </Button>
        <Button
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.foul}
        >
          Foul
        </Button>
      </div>
    );
  }
}
export default Dashboard;
