import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import NavbarContainer from "./containers/NavbarContainer";
import TopContainer from "./containers/TopContainer";
import MyPageContainer from "./containers/MyPageContainer";
import PressButtonContainer from "./containers/PressButtonContainer";
import Auth from "./components/Auth";

export default ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <NavbarContainer />
      <Switch>
        <Route exact path="/" component={TopContainer} />
        <Auth>
          <Route exact path="/mypage" component={MyPageContainer} />
          <Route exact path="/press" component={PressButtonContainer} />
        </Auth>
        <Route render={() => (<div>404</div>)} />
      </Switch>
    </div>
  </ConnectedRouter>
);
