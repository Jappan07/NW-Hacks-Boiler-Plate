import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"

import { useAuth } from "../../../store/AuthProvider";

export default function NavigationItems(...props) {
    const { currentUser } = useAuth()
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/playground">Playground</NavigationItem>
            {currentUser == null ? 
                <>
                <NavigationItem link="/u/login">Login</NavigationItem>
                <NavigationItem link="/u/register">Register</NavigationItem>
                </>
            :
            <NavigationItem link="/u/logout">Logout</NavigationItem>
            }
            <NavigationItem link="/#footer" special="true"> Contact Us </NavigationItem>
        </ul>
    )
}
