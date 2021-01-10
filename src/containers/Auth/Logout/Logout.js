import React, { useState } from 'react';
import { useAuth } from "../../../store/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import AuthCard from "../../../components/AuthCard/AuthCard";

function Logout() {
    const [error, setError] = useState("")
    const { logout, currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    console.log(currentUser)

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
    }

    return (
        <AuthCard>
            {error && <alert variant="danger">{error}</alert>}
            <form className="Formfill"> 
                <span className="text">
                Are you Sure You wanna go <strong>{currentUser.email} ?</strong>
                </span>
                <input 
                    disabled={loading} 
                    type="submit"
                    value="Logout" />
            </form>
        </AuthCard>
    )
}

export default Logout
