import React, { useRef, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../../store/AuthProvider"

function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    if(currentUser){
      history.push("/playground")
    }

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
    }

    return (
        <div>
            <h2 className="text-center mb-4">Sign Up</h2>
          {error && <alert variant="danger">{error}</alert>}
          <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} required />
            <input type="password" ref={passwordRef} required />
            <input type="password" ref={passwordConfirmRef} required />    
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </div>
    )
}

export default Register