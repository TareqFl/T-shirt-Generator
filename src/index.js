import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import App from "./App";
import Reducers from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers());
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
