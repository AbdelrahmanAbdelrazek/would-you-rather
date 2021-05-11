import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";

class QuestionsList extends Component {
  render() {
    const { allQuestions, questionsIds = [], showResults, classes } = this.props;
    let questions = questionsIds.sort((a, b) => {
      return allQuestions[b].timestamp - allQuestions[a].timestamp;
    });
    return (
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {questions.map((q) => (
            <QuestionCard
              question={allQuestions[q]}
              showResults={showResults}
              key={q}
            />
          ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(QuestionsList);
