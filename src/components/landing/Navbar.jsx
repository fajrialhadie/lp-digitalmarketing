
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="landing-navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L22 22M22 2L2 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span>Kawruh</span>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="active">Home</Link>
                    <div className="nav-item-dropdown">
                        <span>Learning Path</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                    <div className="nav-item-dropdown">
                        <span>Challenge</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                    <Link to="/testimonial">Testimonial</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="navbar-auth">
                    <Link to="/login" className="btn btn-outline">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
