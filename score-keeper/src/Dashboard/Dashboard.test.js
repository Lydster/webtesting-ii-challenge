import React from "react";
import ReactDOM from "react-dom";

import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
