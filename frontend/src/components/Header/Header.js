import React from "react";
import './Header.css'

const Header = () => {

    return (
        <div className="header">

            <h3>MyNotes</h3>

            <div class="dropdown profile_btn">
                <p class="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </p>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;