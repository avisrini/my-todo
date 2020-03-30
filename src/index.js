import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList";

import "./index.css";

// const element = <h1>Hello, React!</h1>;

const destination = document.getElementById("root");

ReactDOM.render(<TodoList />, destination);
