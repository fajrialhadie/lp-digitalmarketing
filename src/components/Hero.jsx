import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero" style={{ padding: '4rem 0 2rem', textAlign: 'center', background: 'white' }}>
            <div className="container">
                <span style={{
                    background: '#eff6ff',
                    color: 'var(--color-primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '1.5rem'
                }}>
                    ✨ Kelas Online
                </span>

                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem', fontWeight: '800', lineHeight: '1.2' }}>
                    Bangun Akun Instagram <br />
                    <span className="text-primary">Tanpa Joget & Pamer Harta</span>
                </h1>

                <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Strategi "Bapak-bapak" cerdas membangun personal branding dan menghasilkan income dari rumah.
                </p>

                {/* CTA moved to Video Section usually, but keeping primary here */}
                <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#pricing" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                        Daftar Kelas Sekarang →
                    </a>
                    <Link to="/modules" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Lihat Semua Modul
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

