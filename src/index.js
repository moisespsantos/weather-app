import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WatherApp from "./container/WeatherApp";

ReactDOM.render(
     <div>
          <Header></Header>
          <WatherApp />
     </div>,
     document.getElementById("root")
);
