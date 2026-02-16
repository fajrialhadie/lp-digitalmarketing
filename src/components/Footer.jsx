import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div className="container">
                <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>Instagram Media</h3>
                <p style={{ marginBottom: '2rem' }}>Membantu Anda tumbuh di era digital.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>TikTok</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a>
                </div>

                <p style={{ fontSize: '0.9rem' }}>&copy; 2024 Instagram Media Course. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
