import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Button,
  Tooltip,
} from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PressButton extends Component {
  componentDidMount() {
    this.props.checkPushToday(this.props.user);
  }

  render() {
    const { classes, user } = this.props;
    const Tip = props => (
      <div>
        {props.isShow ?
          <Tooltip title="今日はもう押しました！明日も気合い入れて頑張りましょう💪">
            <span>{props.children}</span>
          </Tooltip>
        : props.children}
      </div>
    );
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Tip isShow={this.props.pushToday}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.props.pushButton(user)}
              disabled={this.props.pushToday}
            >
              スタンプを押す！
            </Button>
          </Tip>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PressButton)
