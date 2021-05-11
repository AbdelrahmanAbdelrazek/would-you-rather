import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

class QuestionCard extends Component {
  showResult() {
    this.props.history.push("questions/" + this.props.question.id);
  }
  render() {
    const { question, showResults, classes } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                alt={this.props.users[question.author].name}
                src={this.props.users[question.author].avatarURL}
              />
            }
            title={this.props.users[question.author].name}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">
              Would you rather:
            </Typography>
            <Typography variant="body1">
              {question.optionOne.text}
            </Typography>
            <Typography variant="body1">
            {question.optionTwo.text}
            </Typography>

          </CardContent>
          <CardActions>
            <Button
              type="primary"
              size="medium"
              onClick={this.showResult.bind(this)}
            >
              {showResults ? "Show Results" : "Submit Answer"}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
const ConnectedQuestionCard = connect(mapStateToProps)(QuestionCard);

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default withStyles(useStyles)(withRouter(ConnectedQuestionCard));
