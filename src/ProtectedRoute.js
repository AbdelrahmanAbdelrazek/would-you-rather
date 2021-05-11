import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route, Redirect} from "react-router-dom";

class ProtectedRoute extends Component {
    render() {
        const { component: Component, authUser } = this.props
        let path = this.props.location.pathname
        return (
            <Route
                {...{ path }}
                render={props => (
                    authUser ?
                        <Component {...props} /> :
                        <Redirect to={{pathname:`/login`, state:{redirect_to:path}}} />
                )}
            />
        )
    }
}
function mapStateToProps({ authUser }) {
    return {
        authUser
    };
}

export default connect(mapStateToProps)(ProtectedRoute)
