import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render (<BrowserRouter><App /></BrowserRouter>)