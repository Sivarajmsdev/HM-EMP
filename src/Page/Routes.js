import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Login from './Login';
import ForgotPassword from './ForgotPassword';

export default class Routes extends React.Component{
    constructor(){
        super();
        this.state={
            _routesDate:[]
        }
    }

    render(){
        return(
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}>
                            <Login />
                        </Route>
                        <Route path="/login" exact component={Login}>
                            <Login />
                        </Route>
                        <Route path="/forgot-password" component={ForgotPassword}>
                            <ForgotPassword />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}