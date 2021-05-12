import { connect } from "react-redux";
import React, { Component } from "react";
import { setAuthUser } from "../actions/authUser";
import { withRouter } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useStyles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

class Login extends Component {
  onChange(e) {
    this.props.setAuthUser(e.target.value);
    let redirect = this.props.location.state? this.props.location.state.redirect_to : undefined;
    if(redirect){
        this.props.history.push(redirect)
    }else{
        this.props.history.push("/")
    }
  }
  render() {
      const {classes} = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Select User</InputLabel>
          <Select
            onChange={this.onChange.bind(this)}
          >
              {this.props.users.map(user => 
              <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
              )}
          </Select>
        </FormControl>
      </div>
    );
  }
}
const ConnectedLoginForm = connect(mapStateToProps, { setAuthUser })(Login);

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default withStyles(useStyles)(withRouter(ConnectedLoginForm));
