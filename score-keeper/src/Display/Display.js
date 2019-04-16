import React from "react";

const Display = props => {
  return (
    <div>
      <div>
        <h2>{props.hit}</h2>
        <h4>Hits</h4>
      </div>
      <div>
        <h2>{props.ball}</h2>
        <h4>Balls</h4>
      </div>
    </div>
  );
};

export default Display;
