import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import store from "./lib/store";

toast.configure({ pauseOnHover: true });

const DOM_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  DOM_NODE
);
