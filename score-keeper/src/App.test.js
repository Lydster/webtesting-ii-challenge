import React from "react";
import ReactDOM from "react-dom";

import "jest-dom/extend-expect";
import App from "./App";
import Dashboard from "./Dashboard/Dashboard";
import Display from "./Display/Display";
import { render, fireEvent } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App/>", () => {
  const app = render(<App />);
  const display = render(<Display />);
  const dashboard = render(<Dashboard />);

  it("clears counts when a hit happens", () => {
    const { getByText } = render(<App />);
    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);

    getByText(/0/);
  });

  it("ball increments", () => {
    const ballButton = dashboard.getByTitle(/ballbutton/i);
    const ballCount = app.getByTitle("ballcount");
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent("2");
    fireEvent.click(ballButton); //adding two more clicks to the clicks that I already did in the last test.
    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent("0");
  });

  it("strike increments", () => {
    const strikeButton = dashboard.getByTitle(/strikebutton/i);
    const strikeCount = app.getByTitle("strikecount");
    fireEvent.click(strikeButton);
    expect(strikeCount).toHaveTextContent("1");
  });
});
