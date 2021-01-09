import React, {useState} from 'react';
import { auth, provider } from "../../../firebase";
import Button from "../../../components/UI/Button/Button";
import classes from "./Login.module.css"

import { ReactComponent as SvgMan } from "../../../assets/svgMan.svg";
import { Redirect} from "react-router-dom";
import { UseStateValue } from "../../../store/StateProvider";
import { actionTypes } from "../../../store/reducer";

function Login() {
    const [{}, dispatch] = UseStateValue();
    const [routeRedirect, setRouteRedirect] = useState(false);

    const signIn = async(e) => {
        e.preventDefault();
        await auth
                .signInWithPopup(provider)
                .then((reuslt) => {
                    setRouteRedirect(true);
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: reuslt.user,
                    });
                })
                .catch((error) => alert(error.message));
    };

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/playground" />  
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.SubWrapper}>
                <div className={classes.SvgMan}>
                    <SvgMan height="200px"/>
                </div>
                <h1 className={classes.Header}>Login</h1>
                <Button variant="outlined" clicked={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login