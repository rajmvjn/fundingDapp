// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CreateFundRequest from "../components/admin/CreateFundRequest";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without funding requests", () => {
  act(() => {
    render(<CreateFundRequest />, container);
  });
  expect(container.textContent).toBe("List the fund requests..");
});