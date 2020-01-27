import React from "react";
import "./style.css";

function Results({ children, title }) {
    return (
        <div className="container z-depth-2 results">
            <div className="row">
                <h5 className="result-title">{title}</h5>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Results;