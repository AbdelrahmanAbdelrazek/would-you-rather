import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/common";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import PollDetails from "./components/PollDetails";
import Leaderboard from "./components/Leaderboard";
import NewQuestion from "./components/NewQuestion";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authUser } = this.props;
    return (
      <div>
        {authUser && <Header active="home" authUser={authUser} />}
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/questions" component={PollDetails} />
          <ProtectedRoute path="/leaderboard" component={Leaderboard} />
          <ProtectedRoute path="/add" component={NewQuestion} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}
export default connect(mapStateToProps, { handleInitialData })(withRouter(App));
