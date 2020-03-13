import React from "react";
import  "./error-indicator.css"
import icon from "./Death-Star-icon.png"


const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img className="error-image" src={icon} alt="error icon" />
            <span className="boom">BOOM!</span>
            <sapn>
                Something has gone terribly wrong
            </sapn>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator