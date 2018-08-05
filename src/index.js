import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./componenets/counters.jsx";

ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();
