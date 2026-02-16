
import React from 'react';
import { Link } from 'react-router-dom';

const HeroDark = () => {
    return (
        <section className="mid-hero">
            <div className="container mid-hero-container">
                <div className="mid-hero-content">
                    <div className="mid-hero-badge">
                        <span className="dot">✨</span> Premium Digital Academy
                    </div>
                    <h1>
                        Bongkar Rahasia Profit <span className="mid-white">Dari Internet</span> Kuasai Strategi <span className="mid-gradient-text">Digital Paling Ampuh</span> <span className="mid-gradient-text">Bangun Aset Digital Anda Sekarang!</span>
                    </h1>
                    <p className="mid-hero-desc">
                        Temukan cara tercepat membangun aliran pendapatan baru melalui dunia digital. Pelajari strategi yang sudah terbukti dari praktisi berpengalaman dan mulai hasilkan cuan tanpa batas hari ini.
                    </p>
                    <div className="mid-hero-actions">
                        <a href="#modules-grid" className="mid-btn-white mid-btn-lg" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('.modules-filter')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Pilih Modul Sekarang →
                        </a>
                    </div>
                    <div className="mid-hero-trust-row">
                        <div className="trust-item-mid">
                            <span className="check-mid">✓</span>
                            <span>Akses Seumur Hidup</span>
                        </div>
                        <div className="trust-item-mid">
                            <span className="check-mid">✓</span>
                            <span>Materi Terupdate</span>
                        </div>
                        <div className="trust-item-mid">
                            <span className="check-mid">✓</span>
                            <span>Berdasarkan Study Kasus</span>
                        </div>
                    </div>
                </div>

                <div className="mid-hero-image">
                    <div className="catalog-visual">
                        <div className="catalog-phone">
                            <div className="phone-screen">
                                <div className="screen-header">
                                    <span className="ig-username">vox_academy</span>
                                    <div className="header-status">✨ Insights</div>
                                </div>
                                <div className="screen-content ig-insights">
                                    <div className="insight-stat-grid">
                                        <div className="i-stat">
                                            <span className="i-label">Reach</span>
                                            <span className="i-val">245K</span>
                                            <span className="i-trend">+12.5%</span>
                                        </div>
                                        <div className="i-stat">
                                            <span className="i-label">Followers</span>
                                            <span className="i-val">5.8K</span>
                                            <span className="i-trend">+450</span>
                                        </div>
                                    </div>
                                    <div className="insight-chart-box">
                                        <div className="chart-header">Account Growth</div>
                                        <div className="chart-visual">
                                            <div className="bar" style={{ height: '40%' }}></div>
                                            <div className="bar" style={{ height: '60%' }}></div>
                                            <div className="bar" style={{ height: '85%' }}></div>
                                            <div className="bar active" style={{ height: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div className="audience-insight">
                                        <div className="insight-row">
                                            <span>Profile Visits</span>
                                            <strong>18.2K</strong>
                                        </div>
                                        <div className="insight-row">
                                            <span>Link Clicks</span>
                                            <strong className="text-blue">12.5K</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="revenue-popup">
                                    <div className="popup-icon">📈</div>
                                    <div className="popup-info">
                                        <strong>Monthly Impressions</strong>
                                        <span>1.2M+ Reach</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-glow"></div>
                    </div>
                </div>
            </div>

            <div className="mid-scroll-indicator">
                SCROLL
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default HeroDark;
