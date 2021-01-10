import React from 'react';
import { Link } from "react-router-dom";

function PlaygroundWelcome() {
    return (
        <div>
            Welcome page
            <Link to="/playground/video-input">Record Video</Link>
        </div>
    )
}

export default PlaygroundWelcome
