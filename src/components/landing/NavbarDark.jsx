
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="mid-navbar">
            <div className="container mid-nav-container">
                <Link to="/" className="mid-logo">
                    <div className="logo-box">M</div>
                    <span>MID TEKNOLOGI</span>
                </Link>

                <div className="mid-nav-actions">
                    <Link to="/courses" className="mid-btn-primary">
                        Kelas
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
