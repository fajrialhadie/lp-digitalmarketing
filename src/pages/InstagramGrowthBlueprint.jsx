import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SingleProductPage.css';

const InstagramGrowthBlueprint = () => {
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

    const formatTime = (num) => num.toString().padStart(2, '0');

    const testimonials = [
        {
            name: "Andi Rahmat",
            role: "Content Creator",
            avatar: "AR",
            text: "Dari 500 followers sekarang sudah 50K dalam 3 bulan! Materi sangat actionable.",
            result: "+50K Followers",
            rating: 5
        },
        {
            name: "Dewi Sartika",
            role: "Entrepreneur",
            avatar: "DS",
            text: "ROI-nya gila! Sudah balik modal dalam 2 minggu dari endorsement pertama.",
            result: "Rp 15jt/bulan",
            rating: 5
        },
        {
            name: "Budi Wijaya",
            role: "Digital Marketer",
            avatar: "BW",
            text: "Step-by-step banget. Pemula pun bisa langsung praktek dan dapat hasil.",
            result: "+25K Followers",
            rating: 5
        },
        {
            name: "Rina Permata",
            role: "Online Shop Owner",
            avatar: "RP",
            text: "Omzet toko naik 300% setelah apply strategi dari modul ini. Worth it!",
            result: "3x Revenue",
            rating: 5
        }
    ];

    const modules = [
        { title: "Mindset & Foundation", lessons: 8, duration: "45 menit" },
        { title: "Profile Optimization Mastery", lessons: 6, duration: "35 menit" },
        { title: "Content Strategy Blueprint", lessons: 12, duration: "1.5 jam" },
        { title: "Viral Hooks & Captions", lessons: 10, duration: "1 jam" },
        { title: "Hashtag & SEO Instagram", lessons: 5, duration: "30 menit" },
        { title: "Engagement & Community Building", lessons: 8, duration: "50 menit" },
        { title: "Algorithm Hacking 2024", lessons: 7, duration: "45 menit" },
        { title: "Monetization Strategies", lessons: 10, duration: "1.5 jam" }
    ];

    const bonuses = [
        { icon: "📋", title: "Template Konten Viral", value: "Rp 500.000" },
        { icon: "📚", title: "E-book Algorithm Secret", value: "Rp 350.000" },
        { icon: "🎯", title: "Swipe File 100+ Hook", value: "Rp 250.000" },
        { icon: "👥", title: "Akses Grup VIP Tanpa Batas", value: "Rp 1.000.000" }
    ];

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
            <section className="sp-hero">
                <div className="container">
                    <div className="sp-hero__grid">
                        <div className="sp-hero__content">
                            <div className="sp-hero__badges">
                                <span className="badge badge--hot">🔥 Best Seller</span>
                            </div>

                            <h1 className="sp-hero__title">
                                Mediagram Mastery: Dapatin 10K+ Followers Mulai dari 0 dari Instagram
                            </h1>

                            <p className="sp-hero__subtitle">
                                Framework terbukti yang sudah membantu 5,800+ orang Indonesia
                                membangun audiens loyal dan menghasilkan income dari Instagram.
                            </p>

                            <div className="sp-hero__proof">
                                <div className="proof-item">
                                    <span className="proof-number">🎬 50+</span>
                                    <span className="proof-label">Video Materi</span>
                                </div>
                            </div>

                            <div className="sp-hero__cta-box">
                                <div className="price-display">
                                    <span className="price-original">Rp 897.000</span>
                                    <span className="price-current">Rp 147.000</span>
                                    <span className="price-save">Hemat 84%</span>
                                </div>
                                <a href="#order" className="cta-button cta-button--primary">
                                    🚀 Akses Sekarang - Rp 147.000
                                </a>
                                <p className="cta-guarantee">✅ Garansi 7 Hari Uang Kembali 100%</p>
                            </div>
                        </div>

                        <div className="sp-hero__visual">
                            <div className="product-mockup">
                                <div className="mockup-screen">
                                    <div className="mockup-header">
                                        <span className="mockup-title">Mediagram Mastery</span>
                                    </div>
                                    <div className="mockup-content">
                                        <div className="mockup-stat">
                                            <span className="stat-icon">📊</span>
                                            <span className="stat-text">50+ Video HD</span>
                                        </div>
                                        <div className="mockup-stat">
                                            <span className="stat-icon">📝</span>
                                            <span className="stat-text">8 Modul Lengkap</span>
                                        </div>
                                        <div className="mockup-stat">
                                            <span className="stat-icon">🎁</span>
                                            <span className="stat-text">4 Bonus Eksklusif</span>
                                        </div>
                                        <div className="mockup-stat">
                                            <span className="stat-icon">♾️</span>
                                            <span className="stat-text">Lifetime Access</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mockup-badge">
                                    <span>-83%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="sp-problem">
                <div className="container">
                    <h2 className="section-title">Apakah Ini Yang Kamu Rasakan? 😔</h2>
                    <div className="problems-grid">
                        <div className="problem-card">
                            <span className="problem-icon">😩</span>
                            <h3>Followers Stuck?</h3>
                            <p>Sudah posting rutin tapi followers tidak bertambah, engagement rendah.</p>
                        </div>
                        <div className="problem-card">
                            <span className="problem-icon">🤷</span>
                            <h3>Bingung Konten?</h3>
                            <p>Tidak tahu harus posting apa, ide konten selalu mentok.</p>
                        </div>
                        <div className="problem-card">
                            <span className="problem-icon">💸</span>
                            <h3>Belum Menghasilkan?</h3>
                            <p>Punya followers tapi tidak tahu cara monetisasi.</p>
                        </div>
                        <div className="problem-card">
                            <span className="problem-icon">⏰</span>
                            <h3>Buang Waktu?</h3>
                            <p>Trial & error sendirian tanpa arah yang jelas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="sp-solution">
                <div className="container">
                    <div className="solution-header">
                        <span className="solution-badge">💡 SOLUSINYA</span>
                        <h2 className="section-title">Mediagram Mastery</h2>
                        <p className="section-subtitle">
                            Framework step-by-step yang akan membawa akun Instagram-mu dari 0 ke 100K+ followers
                            dengan strategi organik yang sudah terbukti berhasil.
                        </p>
                    </div>

                    <div className="modules-list">
                        {modules.map((mod, index) => (
                            <div key={index} className="module-item">
                                <div className="module-number">{index + 1}</div>
                                <div className="module-info">
                                    <h4>{mod.title}</h4>
                                    <span>{mod.lessons} video • {mod.duration}</span>
                                </div>
                                <div className="module-check">✓</div>
                            </div>
                        ))}
                    </div>

                    <div className="total-value">
                        <span>Total: 66 Video Materi • 8+ Jam Konten Premium</span>
                    </div>
                </div>
            </section>

            {/* Bonuses Section */}
            <section className="sp-bonuses">
                <div className="container">
                    <h2 className="section-title">🎁 BONUS EKSKLUSIF</h2>
                    <p className="section-subtitle">Khusus yang order hari ini, kamu juga dapat:</p>

                    <div className="bonuses-grid">
                        {bonuses.map((bonus, index) => (
                            <div key={index} className="bonus-card">
                                <span className="bonus-icon">{bonus.icon}</span>
                                <h4>{bonus.title}</h4>
                                <span className="bonus-value">Nilai: {bonus.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bonus-total">
                        <span>Total Nilai Bonus:</span>
                        <span className="bonus-total-value">Rp 2.100.000</span>
                        <span className="bonus-free">GRATIS!</span>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="sp-testimonials">
                <div className="container">
                    <h2 className="section-title">Apa Kata Mereka? ⭐</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((test, index) => (
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

            {/* Guarantee Section */}
            <section className="sp-guarantee">
                <div className="container">
                    <div className="guarantee-box">
                        <div className="guarantee-icon">🛡️</div>
                        <h2>Garansi 7 Hari Uang Kembali 100%</h2>
                        <p>
                            Jika dalam 7 hari kamu merasa materi ini tidak bermanfaat,
                            cukup hubungi kami dan uangmu akan dikembalikan 100%. No questions asked.
                            <strong> Risikonya 100% di kami.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="sp-faq">
                <div className="container">
                    <h2 className="section-title">Pertanyaan Umum</h2>
                    <div className="faq-list">
                        <details className="faq-item" open>
                            <summary>Apakah cocok untuk pemula yang belum punya followers?</summary>
                            <p>Sangat cocok! Justru materi ini dirancang dari dasar. Banyak member yang mulai dari 0 followers dan berhasil tembus 10K-50K dalam beberapa bulan.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Berapa lama akses materinya?</summary>
                            <p>Akses SEUMUR HIDUP! Sekali beli, kamu bisa akses tanpa batas termasuk semua update materi di masa depan.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Apakah harus keluar modal iklan?</summary>
                            <p>Tidak! Semua strategi di sini adalah organic growth. Tidak perlu budget iklan sama sekali.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Bagaimana cara aksesnya?</summary>
                            <p>Setelah pembayaran, kamu akan langsung dapat akses ke member area untuk streaming semua video materi.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Apakah ada grup komunitas?</summary>
                            <p>Ya! Kamu akan dapat akses ke grup Telegram eksklusif untuk networking dan sharing dengan sesama member.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section id="order" className="sp-final-cta">
                <div className="container">
                    <div className="final-cta-box">
                        <div className="final-cta-header">
                            <span className="limited-badge">⚡ PENAWARAN TERBATAS</span>
                            <h2>Mulai Transformasi Instagram-mu Sekarang!</h2>
                        </div>

                        <div className="final-cta-content">
                            <div className="package-summary">
                                <h3>Yang Kamu Dapat:</h3>
                                <ul>
                                    <li>✓ 50+ Video Materi HD (Nilai Rp 1.500.000)</li>
                                    <li>✓ 8 Modul Lengkap Step-by-Step</li>
                                    <li>✓ Template Konten Viral (Rp 500.000)</li>
                                    <li>✓ E-book Algorithm Secret (Rp 350.000)</li>
                                    <li>✓ Swipe File 100+ Hook (Rp 250.000)</li>
                                    <li>✓ Akses Grup VIP Tanpa Batas (Rp 1.000.000)</li>
                                    <li>✓ Lifetime Access & Free Updates</li>
                                </ul>
                                <div className="total-normal">
                                    Total Nilai Normal: <span>Rp 3.600.000</span>
                                </div>
                            </div>

                            <div className="order-box">
                                <div className="order-price">
                                    <span className="order-original">Rp 897.000</span>
                                    <span className="order-current">Rp 147.000</span>
                                    <span className="order-save">HEMAT Rp 750.000 (84%)</span>
                                </div>

                                <div className="order-timer">
                                    <span>Harga naik dalam:</span>
                                    <div className="timer-display">
                                        <span>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
                                    </div>
                                </div>

                                <a href="#" className="order-button">
                                    🚀 AKSES SEKARANG - Rp 147.000
                                </a>

                                <div className="order-trust">
                                    <span>🔒 Pembayaran Aman</span>
                                    <span>🛡️ Garansi 7 Hari</span>
                                </div>

                                <div className="payment-methods">
                                    <span>Metode Pembayaran:</span>
                                    <div className="payment-icons">
                                        <span>💳 Transfer Bank</span>
                                        <span>📱 E-Wallet</span>
                                        <span>🏪 Minimarket</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="sp-footer">
                <div className="container">
                    <Link to="/modules" className="back-link">← Kembali ke Daftar Modul</Link>
                    <p>© 2026 MediaGram. Semua hak dilindungi.</p>
                </div>
            </footer>

            {/* Floating CTA Mobile */}
            <div className="floating-cta">
                <a href="#order" className="floating-cta__button">
                    🚀 Akses Sekarang - Rp 147rb
                </a>
            </div>
        </div>
    );
};

export default InstagramGrowthBlueprint;
