import React from "react";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="container nav">
            <h2 className="logo">
                <Link to="/"><img  className="image" src ="ecommerce1.jpg" alt="logo" /></Link>
            </h2>
            <ul className="nav-items">
            <li>
                    <Link to="/"><h2 className="color">Home</h2></Link>
                </li>
                <li>
                    <Link to="/products"><h2 className="color">Product</h2></Link>
                </li>
                <li>
                    <Link to="/about"><h2 className="color">About</h2></Link>
                </li>
                <li>
                    <Link to="/contact"><h2 className="color">Contact</h2></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;