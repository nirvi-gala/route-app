import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header id="header">
            <div className="navbar">
                <div className="main-wrapper">
                    <ul className="navlists">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tasks">Tasks</Link></li>
                        <li><Link to="/user">User</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
