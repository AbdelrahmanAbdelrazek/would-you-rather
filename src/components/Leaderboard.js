import React, { Component } from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
class Leaderboard extends Component {
  render() {
    const { users, classes } = this.props;
    let usersSorted = [];
    Object.values(users).map((user) => {
      let score = Object.keys(user.answers).length + user.questions.length;
      usersSorted.push({ ...user, score });
    });
    usersSorted.sort((a, b) => b.score - a.score);
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {usersSorted.map((user, i) => (
            <UserCard key={i} placement={i+1} user={user} />
          ))}
        </Grid>
      </Container>
    );
  }
}

const ConnectedLeaderboard = connect(mapStateToProps)(Leaderboard);

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default withStyles(useStyles)(withRouter(ConnectedLeaderboard));
