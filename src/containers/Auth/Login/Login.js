import React, { useRef, useState } from 'react';
import classes from "./Login.module.css"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../../store/AuthProvider"

import { ReactComponent as SvgMan } from "../../../assets/svgMan.svg";


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    if(currentUser){
        history.push("/playground")
    }

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.SubWrapper}>
                <div className={classes.SvgMan}>
                    <SvgMan height="200px"/>
                </div>
                <h1 className={classes.Header}>Login</h1>
                {error && <alert variant="danger">{error}</alert>}
                    <form onSubmit={handleSubmit}>
                        <input type="email" ref={emailRef} required />
                        <input type="password" ref={passwordRef} required />    
                        <button disabled={loading} type="submit">
                        Sign Up
                        </button>
                    </form>
            </div>
        </div>
    )
}

export default Login