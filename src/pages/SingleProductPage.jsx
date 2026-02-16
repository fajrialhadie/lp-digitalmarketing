import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import modulesData from '../data/modules.json';
import './SingleProductPage.css';

const SingleProductPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find module by slug
    let product = modulesData.modules.find(m => m.slug === slug);

    // Redirect old slug to new slug
    useEffect(() => {
        if (slug === 'instagram-growth-blueprint') {
            navigate('/mediagram-mastery', { replace: true });
        }
    }, [slug, navigate]);

    // Countdown Timer
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return { hours: 23, minutes: 59, seconds: 59 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, [slug]);

    // If product not found
    if (!product) {
        return (
            <div className="not-found">
                <div className="container">
                    <h1>Produk Tidak Ditemukan</h1>
                    <p>Maaf, modul yang Anda cari tidak tersedia.</p>
                    <Link to="/" className="btn btn-primary">
                        ← Kembali ke Daftar Modul
                    </Link>
                </div>
            </div>
        );
    }

    const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);
    const formatTime = (num) => num.toString().padStart(2, '0');

    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const totalBonusValue = product.bonuses.reduce((acc, b) => acc + b.value, 0);
    const totalLessons = product.modules.reduce((acc, m) => acc + m.lessons, 0);

    return (
        <div className="single-product">
            {/* Urgency Bar */}
            <div className="urgency-bar">
                <div className="urgency-bar__content">
                    <span className="urgency-bar__flash">🔥</span>
                    <span>PROMO TERBATAS! Harga naik dalam</span>
                    <div className="urgency-bar__timer">
                        <span className="timer-box">{formatTime(timeLeft.hours)}</span>:
                        <span className="timer-box">{formatTime(timeLeft.minutes)}</span>:
                        <span className="timer-box">{formatTime(timeLeft.seconds)}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className={`sp-hero ${product.slug === 'google-maps-mastery' ? 'sp-hero--gmaps' : ''} ${product.slug === 'threads-mastery' ? 'sp-hero--threads' : ''} ${product.slug === 'facebook-pro-mastery' ? 'sp-hero--fb' : ''} ${product.slug === 'personal-branding-mastery' ? 'sp-hero--branding' : ''} ${product.slug === 'mediagram-mastery' ? 'sp-hero--mediagram' : ''}`}>
                <div className="container">
                    <div className="sp-hero__grid">
                        <div className="sp-hero__content">
                            <div className="sp-hero__badges">
                                <span className="badge badge--product">● {product.title.split(':')[0]}</span>
                            </div>

                            <h1 className="sp-hero__title">
                                {product.slug === 'google-maps-mastery' ? (
                                    <>
                                        Kuasai <span className="text-secondary">Peringkat #1 Google Maps</span> <br />
                                        & Jangkau 10.000+ Calon Pelanggan!
                                    </>
                                ) : product.slug === 'threads-mastery' ? (
                                    <>
                                        Kuasai Algoritma <br />
                                        <span className="text-secondary">Threads Mastery</span>
                                    </>
                                ) : product.slug === 'facebook-pro-mastery' ? (
                                    <>
                                        Raih $25 Pertama Dari <br />
                                        <span className="text-secondary">Facebook Pro Mastery</span>
                                    </>
                                ) : product.slug === 'personal-branding-mastery' ? (
                                    <>
                                        <span className="text-gradient">Bangun Authority &</span> <br />
                                        <span className="text-secondary">Personal Branding Mastery</span>
                                    </>
                                ) : product.slug === 'mediagram-mastery' ? (
                                    <>
                                        Dapatin <span className="text-secondary">5K Followers</span> dari Akun Mediagram <br />
                                        Hanya dalam <span className="text-gradient">90 Hari Mulai dari 0.</span>
                                    </>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: product.headline }} />
                                )}
                            </h1>

                            <p className="sp-hero__subtitle">
                                {product.slug === 'google-maps-mastery'
                                    ? "Rahasia Terbukti Mendominasi Pencarian Lokal Agar Toko Fisikmu Diserbu Ribuan Pelanggan Secara Otomatis Tanpa Perlu Iklan Jutaan Rupiah!"
                                    : product.slug === 'threads-mastery'
                                        ? "Strategi rahasia memenangkan algoritma Threads untuk membangun akun yang potensial dan menghasilkan."
                                        : product.slug === 'facebook-pro-mastery'
                                            ? "Gak perlu jago IT atau punya ribuan follower. Cukup optimasi profil dan posting konten yang tepat untuk mulai dapat cuan dollar."
                                            : product.slug === 'personal-branding-mastery'
                                                ? "Cara termudah membangun persona digital yang dipercaya audiens tanpa perlu jadi ahli marketing atau jago desain."
                                                : product.slug === 'mediagram-mastery'
                                                    ? "Rahasia Membangun Akun Mediagram Profesional dan Mendapatkan Lebih dari 5K+ Followers dalam Waktu 90 Hari secara Organik."
                                                    : product.subtitle
                                }
                            </p>

                            <div className="sp-hero__actions">
                                <a href="#order" className="cta-button cta-button--primary">
                                    Amankan Promo Sekarang →
                                </a>
                                <a href="#modules" className={`cta-button ${['google-maps-mastery', 'threads-mastery', 'facebook-pro-mastery', 'personal-branding-mastery', 'mediagram-mastery'].includes(product.slug) ? 'cta-button--eye-catching' : ''}`}>
                                    Lihat Materi
                                </a>
                            </div>

                            <div className="sp-hero__trust-badges">
                                <div className="trust-item">
                                    <span className="check">✓</span> {['google-maps-mastery', 'threads-mastery', 'facebook-pro-mastery', 'personal-branding-mastery', 'mediagram-mastery'].includes(product.slug) ? 'Akses Tanpa Batas' : 'Akses Selamanya'}
                                </div>
                                <div className="trust-item">
                                    <span className="check">✓</span> {['google-maps-mastery', 'threads-mastery', 'facebook-pro-mastery', 'personal-branding-mastery', 'mediagram-mastery'].includes(product.slug) ? 'Materi Terupdate' : 'Update Gratis'}
                                </div>
                                <div className="trust-item">
                                    <span className="check">✓</span> {['google-maps-mastery', 'threads-mastery', 'facebook-pro-mastery', 'personal-branding-mastery', 'mediagram-mastery'].includes(product.slug) ? 'Berdasarkan Study Kasus' : 'Group Support'}
                                </div>
                            </div>
                        </div>

                        <div className="sp-hero__visual">
                            {product.slug === 'google-maps-mastery' ? (
                                <div className="gmb-visual">
                                    <div className="gmb-ranking-card">
                                        <div className="search-bar">🔍 Bengkel Terdekat</div>
                                        <div className="ranking-list">
                                            <div className="ranking-item active">
                                                <div className="rank">1</div>
                                                <div className="info">
                                                    <div className="name">Bengkel Anda (Optimized)</div>
                                                    <div className="stars">⭐⭐⭐⭐⭐ <span>(1,240)</span></div>
                                                    <div className="status">Buka • Tutup 21.00</div>
                                                </div>
                                                <div className="action-icons">📞 🗺️</div>
                                            </div>
                                            <div className="ranking-item">
                                                <div className="rank">2</div>
                                                <div className="info">
                                                    <div className="name">Kompetitor A</div>
                                                    <div className="stars">⭐⭐⭐⭐ <span>(84)</span></div>
                                                </div>
                                            </div>
                                            <div className="ranking-item">
                                                <div className="rank">3</div>
                                                <div className="info">
                                                    <div className="name">Kompetitor B</div>
                                                    <div className="stars">⭐⭐⭐ <span>(42)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ranking-glow"></div>
                                    </div>
                                </div>
                            ) : product.slug === 'threads-mastery' ? (
                                <div className="threads-visual">
                                    <div className="threads-phone">
                                        <div className="threads-app">
                                            <div className="threads-header">Threads</div>
                                            <div className="threads-post">
                                                <div className="post-user">
                                                    <div className="avatar-mock"></div>
                                                    <div className="user-meta">
                                                        <div className="name">kreator_vox</div>
                                                        <div className="time">2m</div>
                                                    </div>
                                                </div>
                                                <div className="post-body">
                                                    Rahasia dapet 10k follower dari Threads cuma dalam 30 hari. Semuanya berawal dari satu "Thread Viral" ini... 🧵
                                                </div>
                                                <div className="post-actions">
                                                    <span>❤️ 12.4k</span>
                                                    <span>💬 842</span>
                                                    <span>🔄 2.1k</span>
                                                </div>
                                            </div>
                                            <div className="threads-notif">
                                                <div className="notif-icons">➕➕➕</div>
                                                <div className="notif-text">840 followers baru menyukai kiriman Anda</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="threads-glow"></div>
                                </div>
                            ) : product.slug === 'facebook-pro-mastery' ? (
                                <div className="fb-visual">
                                    <div className="fb-payout-card">
                                        <div className="card-header">
                                            <div className="fb-logo-mock">f</div>
                                            <div className="header-text">
                                                <span className="payout-title">Payouts Hub</span>
                                                <span className="payout-status">Active Monetization</span>
                                            </div>
                                        </div>
                                        <div className="payout-amount">
                                            <span className="currency">$</span>1.248,50
                                        </div>
                                        <div className="payout-stats">
                                            <div className="p-stat">
                                                <span className="label">Last 7 Days</span>
                                                <span className="val">+$342.10</span>
                                            </div>
                                            <div className="p-stat">
                                                <span className="label">Next Payment</span>
                                                <span className="val">Aug 21</span>
                                            </div>
                                        </div>
                                        <div className="goal-meter">
                                            <div className="meter-label">
                                                <span>Goal: $25 Daily</span>
                                                <span>140%</span>
                                            </div>
                                            <div className="meter-bar">
                                                <div className="meter-fill" style={{ width: '100%' }}></div>
                                            </div>
                                        </div>
                                        <div className="payout-indicator">
                                            🎉 Gajian Dollar Berhasil Masuk!
                                        </div>
                                    </div>
                                    <div className="fb-glow"></div>
                                </div>
                            ) : product.slug === 'personal-branding-mastery' ? (
                                <div className="brand-visual">
                                    <div className="brand-card">
                                        <div className="profile-section">
                                            <div className="brand-avatar">👤</div>
                                            <div className="brand-meta">
                                                <div className="brand-name">Your Brand Name</div>
                                                <div className="brand-title">The Expert in Your Niche</div>
                                            </div>
                                            <div className="verified-badge">✓</div>
                                        </div>
                                        <div className="brand-stats">
                                            <div className="b-stat">
                                                <span className="val">25.4K</span>
                                                <span className="label">Loayal Followers</span>
                                            </div>
                                            <div className="b-stat">
                                                <span className="val">4.8%</span>
                                                <span className="label">Eng. Rate</span>
                                            </div>
                                        </div>
                                        <div className="brand-content-mock">
                                            <div className="mock-row"></div>
                                            <div className="mock-row short"></div>
                                            <div className="mock-row"></div>
                                        </div>
                                        <div className="authority-label">🏆 Top Authority</div>
                                    </div>
                                    <div className="brand-glow"></div>
                                </div>
                            ) : product.slug === 'mediagram-mastery' ? (
                                <div className="mediagram-visual">
                                    <div className="mediagram-phone">
                                        <div className="ig-app">
                                            <div className="ig-header">
                                                <span>Mediagram</span>
                                                <div className="header-icons">📷 ✈️</div>
                                            </div>
                                            <div className="ig-profile">
                                                <div className="profile-top">
                                                    <div className="avatar-lg"></div>
                                                    <div className="stats-row">
                                                        <div className="s-item"><strong>124</strong><span>Posts</span></div>
                                                        <div className="s-item"><strong>10.2K</strong><span>Followers</span></div>
                                                        <div className="s-item"><strong>450</strong><span>Following</span></div>
                                                    </div>
                                                </div>
                                                <div className="profile-bio">
                                                    <strong>Mediagram Mastery</strong>
                                                    <p>Digital Assets & Growth Strategy 🚀</p>
                                                    <p>Helping you build 10K assets from 0.</p>
                                                </div>
                                            </div>
                                            <div className="ig-grid">
                                                <div className="grid-item"></div>
                                                <div className="grid-item"></div>
                                                <div className="grid-item"></div>
                                                <div className="grid-item"></div>
                                                <div className="grid-item"></div>
                                                <div className="grid-item"></div>
                                            </div>
                                            <div className="growth-notif">
                                                <div className="notif-badge">🚀</div>
                                                <span>+1,240 followers today!</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mediagram-glow"></div>
                                </div>
                            ) : (
                                <div className="product-mockup">
                                    <div className="mockup-screen">
                                        <div className="mockup-header">
                                            <span className="mockup-title">{product.title}</span>
                                        </div>
                                        <div className="mockup-content">
                                            <div className="mockup-stat">
                                                <span className="stat-icon">📊</span>
                                                <span className="stat-text">{product.totalVideos}+ Video HD</span>
                                            </div>
                                            <div className="mockup-stat">
                                                <span className="stat-icon">📝</span>
                                                <span className="stat-text">{product.modules.length} Modul Lengkap</span>
                                            </div>
                                            <div className="mockup-stat">
                                                <span className="stat-icon">🎁</span>
                                                <span className="stat-text">{product.bonuses.length} Bonus Eksklusif</span>
                                            </div>
                                            <div className="mockup-stat">
                                                <span className="stat-icon">♾️</span>
                                                <span className="stat-text">Akses Tanpa Batas</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mockup-badge">
                                        <span>-{discount}%</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {product.slug === 'google-maps-mastery' && (
                        <div className="sp-hero__stats--fb">
                            <div className="trust-banner">
                                <span className="icon">📍</span>
                                <span className="text">Dominasi <strong>Peringkat #1</strong> di Pencarian Lokal & Dapatkan <strong>10K+ Impression</strong> Setiap Bulan</span>
                            </div>
                        </div>
                    )}

                    {product.slug === 'threads-mastery' && (
                        <div className="sp-hero__stats--fb">
                            <div className="trust-banner">
                                <span className="icon">🧵</span>
                                <span className="text">Kuasai <strong>Algoritma Organik</strong> & Jangkau <strong>1.2M+ Audience</strong> Tanpa Biaya Iklan Sepeserpun</span>
                            </div>
                        </div>
                    )}

                    {product.slug === 'facebook-pro-mastery' && (
                        <div className="sp-hero__stats--fb">
                            <div className="trust-banner">
                                <span className="icon">👥</span>
                                <span className="text">Diikuti Lebih dari <strong>100+ Orang</strong> yang siap gajian dollar</span>
                            </div>
                        </div>
                    )}

                    {product.slug === 'personal-branding-mastery' && (
                        <div className="sp-hero__stats--fb">
                            <div className="trust-banner">
                                <span className="icon">🏆</span>
                                <span className="text">Dapatkan <strong>Strong Authority</strong> & <strong>Loyal Fans</strong> Tanpa Harus Jago Iklan</span>
                            </div>
                        </div>
                    )}

                    {product.slug === 'mediagram-mastery' && (
                        <div className="sp-hero__stats--fb">
                            <div className="trust-banner">
                                <span className="icon">📈</span>
                                <span className="text">Tembus <strong>{'>'} 5.000+ Followers</strong> Organik & Bangun <strong>Aset Digital</strong> yang Menghasilkan dan Profesional!</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Problem Section */}
            <section className="sp-problem">
                <div className="container">
                    <h2 className="section-title">Apakah Ini Yang Kamu Rasakan? 😔</h2>
                    <div className="problems-grid">
                        {product.problems.map((problem, index) => (
                            <div key={index} className="problem-card">
                                <span className="problem-icon">{problem.icon}</span>
                                <h3>{problem.title}</h3>
                                <p>{problem.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="modules" className="sp-solution">
                <div className="container">
                    <div className="solution-header">
                        <span className="solution-badge">💡 SOLUSINYA</span>
                        <h2 className="section-title">{product.title}</h2>
                        <p className="section-subtitle">{product.subtitle}</p>
                    </div>

                    <div className="modules-list">
                        {product.modules.map((mod, index) => (
                            <div key={index} className="module-item">
                                <div className="module-number">{index + 1}</div>
                                <div className="module-info">
                                    <h4>{mod.title}</h4>
                                    <p className="module-desc" style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px', lineHeight: '1.4' }}>{mod.description}</p>
                                </div>
                                <div className="module-check">✓</div>
                            </div>
                        ))}
                    </div>

                    <div className="total-value">
                        <span>Total: {product.modules.length} Modul Lengkap • Durasi Lebih dari 60 Menit</span>
                    </div>
                </div>
            </section>

            {/* Bonuses Section */}
            <section className="sp-bonuses">
                <div className="container">
                    <h2 className="section-title">🎁 BONUS EKSKLUSIF</h2>
                    <p className="section-subtitle" style={{ textAlign: 'center' }}>Khusus yang order hari ini, kamu akan mendapatkan:</p>

                    <div className="bonuses-grid">
                        {product.bonuses.map((bonus, index) => (
                            <div key={index} className="bonus-card">
                                <span className="bonus-icon">{bonus.icon}</span>
                                <h4>{bonus.title}</h4>
                                <span className="bonus-value">Nilai: Rp {formatPrice(bonus.value)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bonus-total">
                        <span>Total Nilai Bonus:</span>
                        <span className="bonus-total-value">Rp {formatPrice(totalBonusValue)}</span>
                        <span className="bonus-free">GRATIS!</span>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="sp-testimonials">
                <div className="container">
                    <h2 className="section-title">Apa Kata Mereka? ⭐</h2>
                    <div className="testimonials-grid">
                        {product.testimonials.map((test, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {'⭐'.repeat(test.rating)}
                                </div>
                                <p className="testimonial-text">"{test.text}"</p>
                                <div className="testimonial-result">
                                    <span className="result-badge">{test.result}</span>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{test.avatar}</div>
                                    <div className="author-info">
                                        <span className="author-name">{test.name}</span>
                                        <span className="author-role">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Info Section */}
            <section className="sp-solution-info" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="solution-info-box" style={{ padding: '2rem', border: '2px solid #e2e8f0', background: 'white', textAlign: 'center' }}>
                        <div className="info-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
                        <h2>Investasi Leher ke Atas Terbaik</h2>
                        <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                            Dapatkan akses ke materi yang sudah terbukti menghasilkan.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
                            <span className="badge" style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.5rem 1rem', borderRadius: '20px' }}>📱 Akses Dimana Saja</span>
                            <span className="badge" style={{ background: '#dcfce7', color: '#15803d', padding: '0.5rem 1rem', borderRadius: '20px' }}>🔐 1x Bayar Akses Tanpa Batas</span>
                            <span className="badge" style={{ background: '#f3e8ff', color: '#7e22ce', padding: '0.5rem 1rem', borderRadius: '20px' }}>📚 Materi Terupdate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="sp-faq">
                <div className="container">
                    <h2 className="section-title">Pertanyaan Umum</h2>
                    <div className="faq-list">
                        {product.faqs.map((faq, index) => (
                            <details key={index} className="faq-item" open={index === 0}>
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section >

            {/* Final CTA Section */}
            <section id="order" className={`sp-final-cta ${product.slug === 'google-maps-mastery' ? 'sp-final-cta--gmaps' : ''} ${product.slug === 'facebook-pro-mastery' ? 'sp-final-cta--fb' : ''}`}>
                <div className="container">
                    <div className="final-cta-box">
                        <div className="final-cta-header">
                            <span className="limited-badge">⚡ PENAWARAN TERBATAS</span>
                            <h2>
                                {product.slug === 'google-maps-mastery'
                                    ? "Amankan Slot Promo & Kuasai Pasar Lokal Sekarang!"
                                    : product.slug === 'facebook-pro-mastery'
                                        ? "Jadilah orang Pertama yang Mendapatkan $25 dari Facebook Pro!"
                                        : product.slug === 'personal-branding-mastery'
                                            ? "Mulai Bangun Authority & Personal Brand yang Menghasilkan Sekarang!"
                                            : product.slug === 'mediagram-mastery'
                                                ? "Mulai Bangun Aset Digital Mediagram & Raih 10K Followers Sekarang!"
                                                : "Mulai Transformasi-mu Sekarang!"
                                }
                            </h2>
                        </div>

                        <div className="final-cta-content">
                            <div className="package-summary">
                                <h3>{product.slug === 'mediagram-mastery' ? 'Keuntungan yang Didapatkan:' : 'Yang Kamu Dapat:'}</h3>
                                <ul className="package-list">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <span className="check">✅</span> {feature.replace('✅ ', '')}
                                        </li>
                                    ))}
                                    {product.bonuses.map((bonus, index) => (
                                        <li key={index}>
                                            <span className="check">✅</span> {bonus.title} (Nilai Rp {formatPrice(bonus.value)})
                                        </li>
                                    ))}
                                </ul>
                                <div className="total-normal">
                                    Total Nilai Normal: <span className="strikethrough">Rp {formatPrice(product.originalPrice + totalBonusValue)}</span>
                                </div>
                            </div>

                            <div className="order-box">
                                <div className="order-price">
                                    <span className="order-original">Rp {formatPrice(product.originalPrice)}</span>
                                    <span className="order-current">Rp {formatPrice(product.price)}</span>
                                    <div className="order-save">
                                        HEMAT Rp {formatPrice(product.originalPrice - product.price)} ({discount}%)
                                    </div>
                                </div>

                                <div className="order-timer">
                                    <span>Harga naik dalam:</span>
                                    <div className="timer-display">
                                        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                                    </div>
                                </div>

                                <a href="#" className="order-button">
                                    🚀 AKSES SEKARANG - Rp {formatPrice(product.price)}
                                </a>

                                <div className="order-trust">
                                    <span>🔒 Pembayaran Aman & Terenkripsi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="sp-footer" >
                <div className="container">
                    <Link to="/" className="back-link">← Kembali ke Daftar Modul</Link>
                    <p>© 2026 MediaGram. Semua hak dilindungi.</p>
                </div>
            </footer >

            {/* Floating CTA Mobile */}
            < div className="floating-cta" >
                <a href="#order" className="floating-cta__button">
                    🚀 Akses Sekarang - Rp {formatPrice(product.price)}
                </a>
            </div >
        </div >
    );
};

export default SingleProductPage;
