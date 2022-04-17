import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import './style.css'


ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

serviceWorker.unregister();
