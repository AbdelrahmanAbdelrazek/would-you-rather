import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import One from "@material-ui/icons/LooksOne";
import Two from "@material-ui/icons/LooksTwo";
import Three from "@material-ui/icons/Looks3";

class UserCard extends Component {
  render() {
    const { user, classes, placement } = this.props;
    let icon = undefined;
    console.log(placement);
    if (placement == 1) {
      icon = <One style={{ color: "#fbbd08", fontSize: 40 }} />;
    }
    if (placement == 2) {
      icon = <Two style={{ color: "#767676", fontSize: 40 }} />;
    }
    if (placement == 3) {
      icon = <Three style={{ color: "#f2711c", fontSize: 40 }} />;
    }
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardHeader
            action={icon}
            avatar={<Avatar alt={user.name} src={user.avatarURL} />}
            title={user.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="body1">
              Answered: {Object.keys(user.answers).length}
            </Typography>
            <Typography variant="body1">
              Questions: {user.questions.length}
            </Typography>
            <Typography variant="h4">Score: {user.score}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(UserCard);
