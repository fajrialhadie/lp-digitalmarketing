import React, { useState } from 'react';

const modules = [
    {
        title: "Module 1: Mindset & Niche",
        content: "Cara menemukan topik yang Anda sukai dan profitable tanpa harus menjadi pakar."
    },
    {
        title: "Module 2: Profile Makeover",
        content: "Optimasi Bio, Foto Profil, dan Highlight agar terlihat profesional dalam 5 menit."
    },
    {
        title: "Module 3: Content Machine",
        content: "Rumus membuat 30 konten dalam 1 hari. Copy-paste template yang sudah disediakan."
    },
    {
        title: "Module 4: The Algorithm",
        content: "Rahasia jam posting dan cara memancing interaksi agar postingan masuk Explore."
    },
    {
        title: "Module 5: Monetization",
        content: "Cara jualan soft-selling tanpa terlihat seperti sales obat."
    }
];

const Curriculum = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="curriculum" style={{ padding: '5rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Intip Materi Kelasnya</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Daging semua, tanpa basa-basi teori sampah.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {modules.map((mod, index) => (
                        <div key={index} style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: 'var(--radius)',
                            background: 'white',
                            overflow: 'hidden'
                        }}>
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    color: 'var(--text-main)'
                                }}
                            >
                                <span>{mod.title}</span>
                                <span style={{ transform: index === openIndex ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                            </button>

                            {index === openIndex && (
                                <div style={{
                                    padding: '0 1.5rem 1.5rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.6',
                                    borderTop: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ paddingTop: '1rem' }}>{mod.content}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
