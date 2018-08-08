import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Button,
} from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PressButton extends Component {
  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button variant="contained" color="secondary" onClick={() => this.props.pushButton(user)}>スタンプを押す！</Button>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PressButton)
