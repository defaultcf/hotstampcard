import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGlow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };
  }

  componentDidMount() {
    this.props.refLogin();
  }

  toggleDrawer = bool => () => {
    this.setState({ drawer: bool });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              熱血スタンプカード
            </Typography>
            {this.props.user.uid ?
              <Button color="inherit" onClick={this.props.logout}>Logout</Button>
            : <Button color="inherit" onClick={this.props.doLogin}>Login</Button>
            }
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <List component="nav">
            <Link to="/">
              <ListItem button>
                Top
              </ListItem>
            </Link>
            <Link to="mypage">
              <ListItem button>
                MyPage
              </ListItem>
            </Link>
            <Link to="press">
              <ListItem button>
                Press
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
