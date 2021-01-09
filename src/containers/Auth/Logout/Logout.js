import React from 'react';
import { auth } from "../../../firebase";

function Logout() {
    const signOut = () => async() => {
        auth().signOut().catch(err => {
            console.log(err);
            return err;
        });
    };
    return (
        <div>
            Are you Sure You wanna go ?
            <button onClick={signOut} >Signout</button>
        </div>
    )
}

export default Logout
