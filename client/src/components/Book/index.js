import React from "react";
import "./style.css";

function Book({
    title,
    authors,
    description,
    image,
    link,
    onSave
}) {
    return (
        <div className="container z-depth-2 book-container">
            <div className="row">
                <div className="col s6">
                    <h5 className="book-title">{title}</h5>
                </div>
                <div className="col s6 book-buttons">
                    <a onClick={onSave} class="waves-effect waves-light btn-small save-btn">Save</a>
                    <a className="waves-effect waves-light btn-small view-btn" href={link}>View</a>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                {authors.map(author => (
                    <div>
                        <div className="book-authors">{author}</div>
                        <br />
                    </div>
                ))}
                </div>
            </div>
            <div className="row no-margin">
                <div className="col s3">
                    <img className="book-img" src={image} />
                </div>
                <div className="col s9 book-desc">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Book;