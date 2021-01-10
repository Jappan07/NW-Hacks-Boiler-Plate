import React, { useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../../store/AuthProvider"
import AuthCard from "../../../components/AuthCard/AuthCard";
import TextField from '@material-ui/core/TextField';
import "../Auth.module.css"

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from "../../../components/UI/Button/Button";

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

    const [values, setValues] = useState({
        showPassword: false,
      });
  
    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/playground")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
    }

    return (
        <AuthCard name="Login">
                {error && <alert variant="danger">{error}</alert>}
                    <form onSubmit={handleSubmit} className="Formfill">
                        <label>
                            <input 
                                type="email"
                                ref={emailRef}
                                id="email" 
                                placeholder="Email"
                                required />
                            <span>Email</span>
                        </label>
                        <label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Password" 
                                ref={passwordRef}
                                required />
                            <span>Password</span>
                        </label>
                        <input 
                            disabled={loading} 
                            type="submit"
                            value="Login" />
                    </form>                 
        </AuthCard>
    )
}

export default Login