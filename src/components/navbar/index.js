import React from "react";

export default function NavBarComp() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">M_Zubair</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">SKill</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Testimonials.</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Weapons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>*/}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
} 