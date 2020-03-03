import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">

                <Link className="navbar-brand" to="/">William Au</Link>
                <div className="navContainer">
                    <p className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/Projects">Projects</Link>
                        <Link className="nav-link" to="/Sandbox">Sandbox</Link>
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </p>
                </div>
            </nav>
        );
    }
}

export default Navbar