import React, { useState } from 'react';
import { useAuth } from "../../../store/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import LogoutIllustration from "../../../assets/logout.svg"
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
        <AuthCard illustration={LogoutIllustration}>
            {error && <alert variant="danger">{error}</alert>}
            <form onSubmit={handleLogout} className="Formfill">
                <span className="text" style={{ "fontSize": "1.2rem" }}>
                    Comeback soon!!
                    <br></br>
                    <strong style={{ "textTransform": "uppercase" }}>{currentUser.email}</strong>
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
