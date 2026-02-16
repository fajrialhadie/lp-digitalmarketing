import React from 'react';

const PainPoints = () => {
    return (
        <section style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Lelah Membuat Konten Tapi <span style={{ color: '#ef4444' }}>Sepi Penonton?</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Anda tidak sendiri. Kebanyakan kreator pemula mengalami masalah ini.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                    {[
                        { title: "Shadowbanned?", desc: "Merasa postingan Anda disembunyikan instagram?" },
                        { title: "Followers Stuck", desc: "Angka followers tidak bergerak berbulan-bulan." },
                        { title: "0 Penjualan", desc: "Likes banyak tapi tidak ada yang beli produk Anda." }
                    ].map((item, i) => (
                        <div key={i} style={{ flex: '1 1 300px', maxWidth: '350px', padding: '2rem', borderLeft: '3px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
