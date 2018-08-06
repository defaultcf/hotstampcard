import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
// For connected-react-router
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, ConnectedRouter, routerMiddleware } from "connected-react-router";
import { Route, Switch } from "react-router";
// Local
import "./index.css";
import NavbarContainer from "./containers/NavbarContainer";
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
    <ConnectedRouter history={history}>
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" render={() => (<div>Top</div>)} />
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
