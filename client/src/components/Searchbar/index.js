import React from "react";
import "./style.css";

export function SearchBar({ children }) {
    return(
        <div className="container z-depth-3 search-bar">
            <form>
                <div className="row">
                    <h5 className="search-title">Book Search</h5>
                </div>
                {children}
            </form>
        </div>
    );
}

export function Input({ children }) {
    return (
        <div className="row">
            <div className="input-field col s12">
                <input id="book-title" type="text"></input>
                <label for="book-title">Book Title</label>
            </div>
            {children}
        </div>
    )
}