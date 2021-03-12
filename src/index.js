import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import TodoState from "./context/TodoState";
ReactDOM.render(
  <>
    <TodoState>
      <App />
    </TodoState>
  </>,
  document.getElementById("root")
);
