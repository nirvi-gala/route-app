import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthentication, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthentication? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)

const mapStateToProps = ({ login: { isAuthentication } }) => ({
    isAuthentication
});

export default connect(mapStateToProps)(PrivateRoute);