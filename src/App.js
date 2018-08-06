import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import NavbarContainer from "./containers/NavbarContainer";
import MyPageContainer from "./containers/MyPageContainer";

export default ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <NavbarContainer />
      <Switch>
        <Route exact path="/" render={() => (<div>Top</div>)} />
        <Route exact path="/mypage" component={MyPageContainer} />
        <Route render={() => (<div>404</div>)} />
      </Switch>
    </div>
  </ConnectedRouter>
);
