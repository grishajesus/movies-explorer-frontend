import "./vendor/fonts/fonts.css";
import "./vendor/normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
