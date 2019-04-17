import React from "react";
//import { Button } from "react-materialize";
import Button from "@material-ui/core/Button";

class Dashboard extends React.Component {
  render(props) {
    return (
      <div>
        <Button
          title="ballbutton"
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.ball}
        >
          Ball
        </Button>
        <Button
          title="hitbutton"
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.hit}
        >
          Hit
        </Button>
        <Button
          title="strikebutton"
          variant="contained"
          href="#contained-buttons"
          onClick={this.props.strike}
        >
          Strike
        </Button>
        <Button
          title="foulbutton"
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
