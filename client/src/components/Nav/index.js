import React from "react";

export function Nav({
    logo,
    children 
}) {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" class="brand-logo right">
                    {logo}
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {children}
                </ul>
            </div>
        </nav>
    )
}

export function NavItem({ 
    path,
    title }
    ) {
    return (
        <li><a href={path}>{title}</a></li>
    )
}