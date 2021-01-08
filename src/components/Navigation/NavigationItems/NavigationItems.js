import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/playground">Playground</NavigationItem>
            <NavigationItem link="/contact-us">Contact Us</NavigationItem>
        </ul>
    )
}

export default navigationItems