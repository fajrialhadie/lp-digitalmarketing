import React from 'react';

const VideoSection = () => {
    return (
        <section style={{ paddingBottom: '4rem', background: 'white' }}>
            <div className="container">
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-lg)',
                    background: '#000'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexDirection: 'column'
                    }}>
                        {/* Placeholder for Video */}
                        <div style={{ fontSize: '4rem', opacity: 0.8 }}>▶</div>
                        <p style={{ marginTop: '1rem', fontWeight: '500' }}>Tonton Cuplikan Kelas</p>
                    </div>
                    {/* iframe or video tag would go here */}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>*Video ini hanya tersedia terbatas</p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
