import React from "react";
import "./style.css";

export function Searchbar(children) {
    return(
        <div className="container">
            <div className="row">
                <h5>Book Search</h5>
            </div>
            {children}
        </div>
    );
}

export function Input(children) {
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