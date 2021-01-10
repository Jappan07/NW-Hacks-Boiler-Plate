import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom"
import { useAuth } from "../../../store/AuthProvider"
import AuthCard from "../../../components/AuthCard/AuthCard";
import "../Auth.module.css"
import loginIllustration from "../../../assets/login.svg";

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    if (currentUser) {
        history.push("/playground")
    }

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
        <AuthCard illustration={loginIllustration} name="Login">
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