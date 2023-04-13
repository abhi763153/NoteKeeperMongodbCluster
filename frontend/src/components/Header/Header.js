import React from "react";
// import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap'
import './Header.css'

const Header = (props) => {

    return (
        <nav className="navbar  navbar-expand-lg navbar-light " style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="#">My Note</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarSupportedContent">

                    <form className="d-flex mx-auto">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" name="ShowNotes" aria-current="page" href="#" onClick={props.showNote} >Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Abhishek
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>

                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;