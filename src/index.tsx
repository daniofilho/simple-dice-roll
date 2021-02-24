import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { DiceProvider } from "./contexts/DiceContext";

ReactDOM.render(
  <DiceProvider>
    <App />
  </DiceProvider>,
  document.getElementById("root")
);
