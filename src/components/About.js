import React from "react";
import {
  withStyles,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
};

const About = props => {
  const { classes } = props;
  return (
    <div>
      <div>
        <p>このサイトは、日野茜指導のラジオ体操第一リリース記念で開発した、ジョークサイトです。</p>
        <p>しかし、ユーザ認証からスタンプ押印まで正常に動作します。</p>
        <p>毎日ラジオ体操をして、健康に過ごしましょう🔥</p>
      </div>

      <Grid container justify="center" spacing={16}>
        <Grid item xs={10} md={5}>
          <Card>
            <CardMedia className={classes.media}
              image="https://pbs.twimg.com/profile_images/935367401620647937/_GMVYqUl.jpg"
              title="Isaac img"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">てまー</Typography>
              <Typography component="p">
                考案者。藍子P。
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary" href="https://twitter.com/Tkon_sec" target="_blank">
                Twitter
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={10} md={5}>
          <Card>
            <CardMedia className={classes.media}
              image="https://pbs.twimg.com/profile_images/846749862733373440/9f--e_Y1.jpg"
              title="Isaac img"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">Isaac</Typography>
              <Typography component="p">
                開発者。小梅P。
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary" href="https://twitter.com/_leo_isaac" target="_blank">
                Twitter
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(About);
