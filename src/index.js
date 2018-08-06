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
import App from "./containers/AppContainer";
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
        <Switch>
          <Route exact path="/" component={App} />
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
