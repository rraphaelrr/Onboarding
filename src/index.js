import React from "react";
import "./styles/style.scss";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
var pjson = require("../package.json");

console.log("V: " + pjson.version);
root.render(<App />);
