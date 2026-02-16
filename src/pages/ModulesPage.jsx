import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import modulesData from '../data/modules.json';
import './ModulesPage.css';
import './MidTheme.css'; // Add new theme styles
import Navbar from '../components/landing/NavbarDark';
import HeroDark from '../components/landing/HeroDark';

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
};

const ModuleCard = ({ module }) => {
    // Discount percentage removed as per request
    // const discount = Math.round((1 - module.price / module.originalPrice) * 100);

    return (
        <Link to={`/${module.slug}`} className="module-card">
            {/* Image */}
            <div className="module-card__image">
                <img src={module.image} alt={module.title} loading="lazy" />
                <span className="module-card__tag" style={{ background: module.tagColor }}>
                    {module.tag}
                </span>
                {/* Discount Badge Removed */}
            </div>

            {/* Content */}
            <div className="module-card__content">
                <span className="module-card__category">{module.category}</span>
                <h3 className="module-card__title">{module.title}</h3>
                <p className="module-card__desc">{module.description}</p>

                {/* Benefit Tags Layout - As per Image */}
                <div className="module-card__benefit-tags">
                    {(module.cardFeatures || module.features).slice(0, 3).map((feat, i) => (
                        <div key={i} className="module-card__benefit-tag">
                            <span className="benefit-icon">✓</span>
                            <span>{feat}</span>
                        </div>
                    ))}
                </div>



                {/* Price & CTA */}
                <div className="module-card__footer">
                    <div className="module-card__price">
                        <span className="module-card__original">Rp {formatPrice(module.originalPrice)}</span>
                        <span className="module-card__current">Rp {formatPrice(module.price)}</span>
                    </div>
                    <span className="module-card__cta">
                        Lihat Detail →
                    </span>
                </div>
            </div>
        </Link>
    );
};

const ModulesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const modules = modulesData.modules;

    const categories = ['all', ...new Set(modules.map(m => m.category))];

    const filteredModules = selectedCategory === 'all'
        ? modules
        : modules.filter(m => m.category === selectedCategory);

    const totalStudents = modules.reduce((acc, m) => acc + m.students, 0);

    return (
        <div className="modules-page">
            <Navbar />

            {/* Hero Section */}
            <HeroDark />

            {/* Filter Section */}
            <section className="modules-filter">
                <div className="container">
                    <div className="filter-container">
                        <div className="filter-wrapper">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''} btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat === 'all' ? '🔥 Semua Modul →' : cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="modules-grid-section">
                <div className="container">
                    <div className="modules-grid">
                        {filteredModules.map((module) => (
                            <ModuleCard
                                key={module.id}
                                module={module}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bundle Offer */}
            <section className="bundle-offer">
                <div className="container">
                    <div className="bundle-card">
                        <div className="bundle-content">
                            <span className="bundle-badge">💎 BEST VALUE</span>
                            <h2 className="bundle-title">Complete Bundle Package</h2>
                            <p className="bundle-desc">
                                Dapatkan SEMUA modul dengan harga spesial! Hemat hingga 85% dibanding beli satuan.
                            </p>

                            <ul className="bundle-features">
                                <li>✓ Akses ke semua {modules.length} modul premium</li>
                                <li>✓ 200+ video materi HD</li>
                                <li>✓ Semua template & resources</li>
                                <li>✓ Grup komunitas VIP</li>
                                <li>✓ Update seumur hidup</li>
                                <li>✓ Bonus: 1-on-1 consultation (30 min)</li>
                            </ul>
                        </div>

                        <div className="bundle-pricing">
                            <div className="bundle-price-box">
                                <span className="bundle-original">Rp 8.900.000</span>
                                <span className="bundle-current">Rp 599.000</span>
                                <span className="bundle-save">Hemat Rp 8.301.000</span>
                            </div>
                            <a href="#" className="bundle-cta">
                                🚀 Ambil Complete Bundle
                            </a>
                            <p className="bundle-guarantee">
                                ✅ Akses Tanpa Batas
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="modules-testimonials">
                <div className="container">
                    <h2 className="section-title">Apa Kata Mereka?</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "Dari 500 followers sekarang sudah 50K dalam 3 bulan! Materi sangat actionable dan mudah dipraktekkan."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">AR</div>
                                <div className="author-info">
                                    <span className="author-name">Andi Rahmat</span>
                                    <span className="author-title">Content Creator</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "Investasi terbaik untuk bisnis online saya. ROI-nya luar biasa, sudah balik modal dalam 2 minggu!"
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">DS</div>
                                <div className="author-info">
                                    <span className="author-name">Dewi Sartika</span>
                                    <span className="author-title">Entrepreneur</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "Modulnya lengkap banget dan step-by-step. Pemula seperti saya pun bisa paham dan langsung praktek."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">BW</div>
                                <div className="author-info">
                                    <span className="author-name">Budi Wijaya</span>
                                    <span className="author-title">Digital Marketer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "Setelah ikut modul ini, saya jadi lebih pede buat kelola akun client. Skill VA-nya bener-bener kepake!"
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">RP</div>
                                <div className="author-info">
                                    <span className="author-name">Rizky Pratama</span>
                                    <span className="author-title">Virtual Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="modules-faq">
                <div className="container">
                    <h2 className="section-title">Pertanyaan Umum</h2>
                    <div className="faq-list">
                        <details className="faq-item">
                            <summary>Apakah bisa akses tanpa batas?</summary>
                            <p>Ya! Semua modul yang Anda beli akan dapat diakses seumur hidup, termasuk update materi di masa depan.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Bagaimana cara aksesnya?</summary>
                            <p>Setelah pembayaran, Anda akan mendapat akses ke member area eksklusif untuk streaming semua video materi.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Apakah materi akan selalu diupdate?</summary>
                            <p>Tentu! Kami selalu memperbarui materi sesuai dengan algoritma dan tren terbaru di dunia digital marketing.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Apakah cocok untuk pemula?</summary>
                            <p>Sangat cocok! Materi disusun dari dasar hingga advanced, sehingga pemula pun bisa mengikuti dengan mudah.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="modules-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Siap Mulai Perjalanan Anda?</h2>
                        <p>Jangan lewatkan kesempatan untuk upgrade skill Anda sekarang juga!</p>
                        <a href="#modules-grid" className="cta-button" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            Pilih Modul Sekarang →
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="modules-footer">
                <div className="container">
                    <p>© 2026 MediaGram. Semua hak dilindungi.</p>
                </div>
            </footer>
        </div>
    );
};

export default ModulesPage;
