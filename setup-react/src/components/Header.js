import React, { Component } from 'react'
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className= "navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to ={"/Homepage"}>Home</Link></li>
                        <li><Link to ={"/Loginpage"}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

