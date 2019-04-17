import React from "react";
import Card from "@material-ui/core/Card";

const Display = props => {
  return (
    <div className="score-container">
      <Card className="points">
        <h2 title="ballcount">{props.ball}</h2>

        <h4>Balls</h4>
      </Card>

      <Card className="points">
        <h2 title="strikecount">{props.strike}</h2>

        <h4>Strikes</h4>
      </Card>
    </div>
  );
};

export default Display;
