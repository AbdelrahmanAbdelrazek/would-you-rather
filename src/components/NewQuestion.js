import { connect } from "react-redux";
import React, { Component } from "react";
import { addQuestion } from "../actions/questions";
import { addQuestionToUser } from "../actions/users";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import { _saveQuestion } from "../api/apifuns";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
const { Meta } = Card;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    //poor man validation
    error1: false,
    error2: false,
  };
  onSubmit() {
    //poor man validation
    this.setState({...this.state, error1:false, error2:false})
    let error = false;
    if(this.state.optionOneText===""){
        error=true
        this.setState({...this.state, error1:true})
    }
    if(this.state.optionTwoText==""){
        error=true;
        this.setState({...this.state, error2:true})
    }
    //end of poor man validation
    if(!error){
        let question = { ...this.state, author: this.props.authUser };
        _saveQuestion(question).then((question) => {
        this.props.addQuestion(question);
        this.props.addQuestionToUser(question);
        });
        this.props.history.push("/");
    }
  }
  render() {
    const { classes } = this.props;
    return (
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={7}>
      <Grid item xs={12} sm={6} md={7}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">Would you rather...?</Typography>

            <div>
                <TextField
                  label="Option One"
                  error={this.state.error1}
                  required={true}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      optionOneText: e.target.value,
                    })
                  }
                />
            </div>
            <div>
                <TextField
                error={this.state.error2}
                required={true}
                  label="Option Two"
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      optionTwoText: e.target.value,
                    })
                  }
                />
            </div>

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
      </Grid>
      </Container>
    );
  }
}

const ConnectedNewQuestionForm = connect(mapStateToProps, {
  addQuestion,
  addQuestionToUser,
})(NewQuestion);

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default withStyles(useStyles)(withRouter(ConnectedNewQuestionForm));
