import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
import classes from "./NavigationItem.module.css"

const navigationItem = (props) => {
    const handleScroll = () => {
        const element = document.getElementById("footer")
        const yOffset = 0;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    let navigationLink = (
        <NavLink
            activeClassName={classes.active}
            exact={props.exact}
            to={props.link} >
            {props.children}
        </NavLink>
    )

    if (props.special) {
        navigationLink = (
            <Link
                className={classes.ContactUs}
                onClick={handleScroll}
                to={props.link}
                activeClass="active"
                special={props.special}
                spy={true}
                smooth={true} >
                Contact Us
            </Link>
        )
    }

    return (
        <li className={classes.NavigationItem}>
            {navigationLink}
        </li>
    )
}

export default navigationItem