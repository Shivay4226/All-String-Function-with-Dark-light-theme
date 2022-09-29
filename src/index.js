import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Theme from "./components/theme/app"
ReactDOM.render(
  <React.StrictMode>
    <Theme />
    <App className="container" />
  </React.StrictMode>,
  document.getElementById("root")
);
