import React from 'react';

const featuresData = [
    {
        title: "Content Strategy",
        text: "Cara membuat konten viral yang disukai algoritma tanpa harus joget-joget.",
        icon: "🔥"
    },
    {
        title: "Profile Optimization",
        text: "Ubah profil bio Anda menjadi magnet followers dalam hitungan detik.",
        icon: "✨"
    },
    {
        title: "Monetization",
        text: "Strategi menghasilkan uang dari endorsement dan produk digital.",
        icon: "💸"
    },
    {
        title: "Community Building",
        text: "Bangun fans fanatik yang selalu menunggu postingan Anda.",
        icon: "🤝"
    }
];

const Features = () => {
    return (
        <section id="curriculum" style={{ padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Apa yang Akan Anda Pelajari?</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Kurikulum dirancang untuk pemula hingga expert.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {featuresData.map((feature, index) => (
                        <div key={index} className="glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
