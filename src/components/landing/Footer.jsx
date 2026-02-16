
import React from 'react';

const Footer = () => {
    return (
        <footer className="landing-footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <span className="logo">Kawruh</span>
                    <p>Crafting a Better Life Through Skill Development</p>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="link-column">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">Safety Center</a>
                        <a href="#">Community Guidelines</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Kawruh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
