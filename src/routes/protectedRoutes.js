import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tasks from '../components/tasks';
import Home from '../components/home';
import User from '../components/userPage';
import PageNotFound from '../components/pageNotFound';
import Navbar from "../components/navbar";


function ProtectedRoutes() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tasks" exact  component={Tasks} />
                <Route path="/user" exact  component={User} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

export default ProtectedRoutes;
