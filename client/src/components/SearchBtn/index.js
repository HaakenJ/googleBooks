import React from "react";
import "./style.css";

function SearchBtn() {
    return (
        <div className="row">
            <button className="btn waves-effect waves-light search-btn" type="submit" name="action">
                Search
            </button>
        </div>
    )
}

export default SearchBtn;