import React from "react";

function AuthOptions() {
    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="account-drop"
                    data-toggle="dropdown"
                >
                    Account
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/logout">
                        Logout
                    </a>
                </div>
            </li>
        </ul>
    );
}

export default AuthOptions;
