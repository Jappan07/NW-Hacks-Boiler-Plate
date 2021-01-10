import React, { useRef, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useAuth } from "../../../store/AuthProvider"
import AuthCard from "../../../components/AuthCard/AuthCard";
import registerImage from "../../../assets/register.svg"

function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  if (currentUser) {
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
      history.push("/playground")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <AuthCard illustration={registerImage} name="Register">
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
            // id="password"
            placeholder="Password"
            ref={passwordRef}
            required />
          <span>Password</span>
        </label>
        <label>
          <input
            type="password"
            // id="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
            required />
          <span>Confirm Password</span>
        </label>
        <input
          disabled={loading}
          type="submit"
          value="SignUp" />
      </form>
    </AuthCard>
  )
}

export default Register