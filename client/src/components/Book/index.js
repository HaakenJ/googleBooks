import React from "react";
import "./style.css";

function Book({
    title,
    authors,
    description,
    image,
    link,
    children
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s6 book-title">
                    {title}
                </div>
                <div className="col s6 book-buttons">
                    <a class="waves-effect waves-light btn-small" href={link}>View</a>
                    {children}
                </div>
            </div>
            {authors.map(author => {
                <div className="row">
                    <div className="book-authors">
                        {author}
                    </div>
                </div>
            })}
            <div className="row">
                <div className="col s3 book-img">
                    <img src={image} />
                </div>
                <div className="col s9 book-desc">
                    {description}
                </div>
            </div>
        </div>
    )
}