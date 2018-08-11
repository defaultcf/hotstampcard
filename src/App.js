import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, pink } from "@material-ui/core/colors";
import NavbarContainer from "./containers/NavbarContainer";
import TopContainer from "./containers/TopContainer";
import About from "./components/About";
import MyPageContainer from "./containers/MyPageContainer";
import PressButtonContainer from "./containers/PressButtonContainer";
import Auth from "./components/Auth";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: pink,
  },
});

export default ({ history }) => (
  <MuiThemeProvider theme={theme}>
    <ConnectedRouter history={history}>
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={TopContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mypage" render={() => <Auth><MyPageContainer/></Auth>} />
          <Route exact path="/press" render={() => <Auth><PressButtonContainer/></Auth>} />
          <Route render={() => (
            <div>
              <h3>404 NotFound</h3>
              <p>ココには何もありません！！左のメニューから正しいリンクを選んでください！！（日野茜ボイス）</p>
            </div>
          )}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </MuiThemeProvider>
);
