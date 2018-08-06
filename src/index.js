import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
// For connected-react-router
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
// Local
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const history = createBrowserHistory();
const initialState = {};
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
