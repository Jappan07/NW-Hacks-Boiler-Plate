import React from "react"
import classes from "./AuthCard.module.css"

const button = (props) => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.SubWrapper}>
                <div className={classes.LoginIllustration}>
                    <img style={{ height: "200px" }} src={props.illustration} alt="login" />
                </div>
                <h1 className={classes.Header}>{props.name}</h1>
                {props.children}
            </div>
        </div>
    )
}

export default button