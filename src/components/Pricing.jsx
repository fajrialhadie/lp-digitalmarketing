import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" style={{ padding: '5rem 0', background: 'var(--color-primary)', color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Investasi Sekali Seumur Hidup</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '3rem', opacity: '0.9' }}>Dapatkan skill high-income dengan harga traktiran kopi.</p>

                <div className="card" style={{ maxWidth: '480px', margin: '0 auto', color: 'var(--text-main)', background: 'white', border: 'none' }}>
                    {/* Badge */}
                    <div style={{
                        background: '#fef3c7',
                        color: '#d97706',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>
                        HEMAT 80% HARI INI
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Full Access Bundle</h3>
                    <div style={{ margin: '1.5rem 0' }}>
                        <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.2rem' }}>Rp 2.500.000</span>
                        <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1', marginTop: '0.5rem', color: 'var(--color-primary)' }}>
                            Rp 249rb
                        </div>
                    </div>

                    <ul style={{ textAlign: 'left', listStyle: 'none', margin: '2rem 0' }}>
                        {[
                            'Akses Seumur Hidup ke 50+ Video Materi',
                            'Update Materi Gratis Selamanya',
                            'Grup Komunitas Eksklusif',
                            'Template Konten Viral Siap Pakai',
                            'E-book "Secret Instagram Algorithm"'
                        ].map((item, i) => (
                            <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--color-primary)', marginRight: '0.75rem', fontSize: '1.2rem' }}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <a href="#" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                        Ambil Promo Sekarang
                    </a>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>*Garansi uang kembali 7 hari</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
