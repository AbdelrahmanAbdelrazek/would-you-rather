import { connect } from "react-redux";
import React, { Component } from "react";
// import { Tabs } from 'antd';
import QuestionsList from "./QuestionsList";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Home extends Component {
  state = { selectedTap: "unanswered" };
  changeTap(e, newValue) {
    this.setState({ selectedTap: newValue });
  }
  render() {
    const {
      allQuestions,
      userData: { answers },
      classes,
    } = this.props;
    const { selectedTap } = this.state;
    let unansweredQuestions = Object.keys(allQuestions).filter(
      (questionId) => !Object.keys(answers).includes(questionId)
    );
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Tabs
              value={selectedTap}
              onChange={this.changeTap.bind(this)}
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab value={"unanswered"} label="Unanswered Questions" />
              <Tab value={"answered"} label="Answered Questions" />
            </Tabs>
          </div>
        </Container>
        <QuestionsList
          allQuestions={allQuestions}
          questionsIds={
            selectedTap == "unanswered"
              ? unansweredQuestions
              : Object.keys(answers)
          }
          showResults={ selectedTap == "unanswered" ? false : true}
        />
      </div>
    );
  }
}

const ConnectedHome = connect(mapStateToProps)(Home);

function mapStateToProps({ authUser, users, questions }) {
  return {
    userData: users[authUser],
    allQuestions: questions,
  };
}

export default withStyles(useStyles)(ConnectedHome);
