import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
class PollResult extends Component {
  back() {
    this.props.history.push("/");
  }
  render() {
    const { question, user, classes } = this.props;
    const userVote = user.answers[question.id];
    const num_votes_1 = question.optionOne.votes.length;
    const num_votes_2 = question.optionTwo.votes.length;
    const total_votes = num_votes_1 + num_votes_2;
    const percentOne = (num_votes_1 / total_votes) * 100;
    const percentTwo = (num_votes_2 / total_votes) * 100;
    let label1 = question.optionOne.text;
    let label2 = question.optionTwo.text;
    if (userVote == "optionOne") label1 += " (Your Vote)";
    else label2 += " (Your Vote)";
    const data = {
      labels: [label1, label2],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: [
            "#B21F00",
            "#C9DE00",
            "#2FDE00",
            "#00A6B4",
            "#6800B4",
          ],
          hoverBackgroundColor: [
            "#501800",
            "#4B5000",
            "#175000",
            "#003350",
            "#35014F",
          ],
          data: [num_votes_1, num_votes_2],
        },
      ],
    };
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={7}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
              <CardHeader
            avatar={
              <Avatar
                alt={user.name}
                src={user.avatarURL}
              />
            }
            title={user.name}
          />
                <Typography variant="h6">
                  Would you rather:
                </Typography>
                <div>
                  <Typography variant="body1">
                    {question.optionOne.text}{" "}
                    {userVote == "optionOne" && <span>(Your Vote)</span>}
                    <span>: {percentOne}%</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">
                    {question.optionTwo.text}{" "}
                    {userVote == "optionTwo" && <span>(Your Vote)</span>}
                    <span>: {percentTwo}%</span>
                  </Typography>
                </div>
                <Pie
                  data={data}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="primary"
                  size="medium"
                  onClick={this.back.bind(this)}
                >
                  Back
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(useStyles)(withRouter(PollResult));
