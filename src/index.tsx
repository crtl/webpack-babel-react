import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const renderer = (module as any).hot ? ReactDOM.render : ReactDOM.hydrate;

renderer(<App />, document.getElementById("root"));
