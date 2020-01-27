import React from "react";
import "./style.css";

function SearchBtn({ onClick }) {
    return (
        <div className="row">
            <button className="btn waves-effect waves-light search-btn" onClick={onClick} type="submit" name="action">
                Search
            </button>
        </div>
    )
}

export default SearchBtn;