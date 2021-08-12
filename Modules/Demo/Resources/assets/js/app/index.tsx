import React from "react";
import { render } from "react-dom";
import App from "./components/App";

// TODO: check if global theaming will overwrite this... else it needs to be removed.
import 'bootstrap/dist/css/bootstrap.min.css';

if (document.getElementById('demo')) {
    render(<App />, document.getElementById("demo"));
}