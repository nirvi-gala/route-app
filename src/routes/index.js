import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/login';
import ProtectedRoutes from './protectedRoutes';
import PrivateRoute from "./privateRoute";

function Routes() {
    return (
        <Switch>
            <Route path="/login" exact component={LoginPage} />
            <PrivateRoute path="/" component={ProtectedRoutes} />
        </Switch>
    )
}

export default Routes
