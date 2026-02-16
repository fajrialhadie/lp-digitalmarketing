import React from 'react';

const Bio = () => {
    return (
        <section style={{ padding: '5rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                    flexWrap: 'wrap',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
                        <div style={{
                            width: '300px',
                            height: '350px',
                            background: '#cbd5e1',
                            borderRadius: 'var(--radius)',
                            position: 'relative'
                        }}>
                            {/* Placeholder for Photo */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '-20px',
                                background: 'white',
                                padding: '1rem',
                                borderRadius: 'var(--radius)',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-primary)' }}>100k+ Followers</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Across all platforms</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Siapa Mentornya?</h2>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Mas Adi (Bapak2ID Style Creator)</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Seorang mantan karyawan swasta yang banting setir menjadi content creator.
                            Berhasil membuktikan bahwa konten edukasi dan "bapak-bapak" pun bisa viral tanpa perlu joget atau pamer harta.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-main)', space: '0.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Founder Komunitas Bapak Canggih</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ 5 Tahun Pengalaman Digital Marketing</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Telah Mengajar 10.000+ Siswa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
