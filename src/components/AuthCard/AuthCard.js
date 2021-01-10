import React from "react"
import classes from "./AuthCard.module.css"

import { ReactComponent as SvgMan } from "../../assets/svgMan.svg";

const button = (props) => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.SubWrapper}>
                <div className={classes.SvgMan}>
                    <SvgMan height="175px"/>
                </div>
                <h1 className={classes.Header}>{props.name}</h1>
                {props.children}
                </div>
        </div>
    )
}

export default button