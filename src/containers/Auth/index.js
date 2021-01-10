import React from 'react'
import { Route } from 'react-router'
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute";

function Auth() {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.SubWrapper}>
                <div className={classes.SvgMan}>
                    <SvgMan height="200px"/>
                </div>
                <Switch>
                    <Route path="/u/login" component={Login} />
                    <Route path="/u/register" component={Login} />
                    <PrivateRoute path="/u/logout" component={Login} />
                </Switch>
            </div>
        </div>
    )
}

export default Auth
