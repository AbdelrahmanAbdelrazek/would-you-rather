import React, { Component } from 'react';
import { Card, Button, Avatar } from 'antd';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import PollResult from './PollResult'
import AnswerPoll from './AnswerPoll'
import NotFound from './404'

class PollDetails extends Component {
    render() {
        let arr = this.props.history.location.pathname.split("/")
        let questionId = arr[arr.length-1];
        let question = this.props.questions[questionId];
        let userAnsweredQuestions = Object.keys(this.props.users[this.props.authUser].answers);
        let showResult = userAnsweredQuestions.includes(questionId);
        if(!question){
            return <NotFound/>
        }
        return (
            <div>
            {showResult?<PollResult question={question} user={this.props.users[this.props.authUser]}/>:<AnswerPoll question={question} user={this.props.users[this.props.authUser]}/>}
            </div>
        );

    }
}
function mapStateToProps({ questions, authUser, users }) {
    return {
        questions,
        authUser,
        users
    };
}
const ConnectedPollDetails = connect(
    mapStateToProps
)(PollDetails);
export default withRouter(ConnectedPollDetails)

