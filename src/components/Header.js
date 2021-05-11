import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
class Navigation extends Component {
  state={openMenu:false}
  logout() {
    this.props.setAuthUser(null);
    this.props.history.push("/login");
  }

  render() {
    const { active, authUser, users, classes } = this.props;
    return (
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Would you rather..?
          </Typography>
          <nav>
            <RouterLink
              variant="button"
              color="textPrimary"
              className={classes.link}
              to="/"
            >
              Home
            </RouterLink>
            <RouterLink
              variant="button"
              color="textPrimary"
              className={classes.link}
              to="/leaderboard"
            >
              Leaderboard
            </RouterLink>
            <RouterLink
              variant="button"
              color="textPrimary"
              className={classes.link}
              to="/add"
            >
              New Question
            </RouterLink>
          </nav>
          {/* <span color="textPrimary" className={classes.link}>
              {users[authUser].name}
            </span>
            <Avatar
                alt={users[authUser].name}
                src={users[authUser].avatarURL}
              />
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={this.logout.bind(this)}
          >
            Logout
          </Button> */}
          <Button
            className={classes.link}
            // onClick={this.logout.bind(this)}
            onClick={(e)=>this.setState({openMenu:e.currentTarget})}
          >
            <span color="textPrimary" className={classes.link}>
              {users[authUser].name}
            </span>
            <Avatar
              alt={users[authUser].name}
              src={users[authUser].avatarURL}
            />
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={this.state.openMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(this.state.openMenu)}
            onClose={()=>this.setState({openMenu:false})}
          >
            <MenuItem onClick={this.logout.bind(this)}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
const ConnectedNavigation = connect(mapStateToProps, { setAuthUser })(
  Navigation
);

export default withStyles(useStyles)(withRouter(ConnectedNavigation));
