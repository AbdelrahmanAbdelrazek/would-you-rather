import { Result, Button } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class NotFound extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="This page does not exist."
                extra={<Button type="primary" onClick={()=>this.props.history.push("/")}>Back Home</Button>}
            />
        );
    }
}


export default withRouter(NotFound);
