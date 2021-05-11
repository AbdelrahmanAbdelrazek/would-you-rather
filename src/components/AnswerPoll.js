import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { addVote } from "../actions/questions";
import { addVoteToUser } from "../actions/users";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class PollResult extends Component {
  state = { Answer: "optionOne" };
  onSubmit() {
    const { question, user } = this.props;
    this.props.addVote(question.id, this.state.Answer, user.id);
    this.props.addVoteToUser(question.id, this.state.Answer, user.id);
    this.props.history.push("/");
  }
  render() {
    const { question, classes, user } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar alt={user.name} src={user.avatarURL} />}
            title={user.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">Would you rather...?</Typography>
            <RadioGroup
              name="Answer"
              defaultValue="optionOne"
              onChange={(e) => this.setState({ Answer: e.target.value })}
            >
              <FormControlLabel
                value="optionOne"
                control={<Radio />}
                label={question.optionOne.text}
              />
              <FormControlLabel
                value="optionTwo"
                control={<Radio />}
                label={question.optionTwo.text}
              />
            </RadioGroup>
            <CardActions>
              <Button
                type="primary"
                size="medium"
                onClick={this.onSubmit.bind(this)}
              >
                Submit
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

const ConnectedPollResult = connect(null, { addVote, addVoteToUser })(
  PollResult
);
export default withStyles(useStyles)(withRouter(ConnectedPollResult));
