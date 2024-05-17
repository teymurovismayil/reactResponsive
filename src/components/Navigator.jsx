import React from 'react'
import { SiReactos } from "react-icons/si";
import { IoSearch } from "react-icons/io5";

export const Navigator = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#"><SiReactos />Charitfix</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Donation</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex gap-1" role="search">
                        <button className="btn bg-success btn-outline-light logInBtn" type="submit"><IoSearch /></button>
                        <button className="btn bg-success btn-outline-light logInBtn" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </nav>
    


    )
}
