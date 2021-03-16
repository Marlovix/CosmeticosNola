import React from "react";

function GuestOptions() {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/login">
                    Login
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/register">
                    Register
                </a>
            </li>
        </ul>
    );
}

export default GuestOptions;
